-- =====================================================================
-- BudgetPilot database schema
-- Paste this whole file into the Supabase SQL Editor and click "Run".
-- It creates the tables, turns on Row Level Security (RLS), and adds
-- policies so each user can only ever see/modify their OWN rows.
--
-- If you already ran an older version of this file, also run the
-- "Migrations" section at the bottom to pick up new columns.
-- =====================================================================

-- ---------------------------------------------------------------------
-- subscriptions: the recurring things you pay for
-- ---------------------------------------------------------------------
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  amount numeric(12, 2) not null default 0,
  currency text not null default 'USD',
  billing_cycle text not null default 'monthly'
    check (billing_cycle in ('weekly', 'monthly', 'yearly')),
  category text not null default 'Other',
  next_renewal_date date,
  is_active boolean not null default true,
  notes text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- budgets: one monthly spending limit per category (per user)
-- ---------------------------------------------------------------------
create table if not exists public.budgets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  category text not null,
  monthly_limit numeric(12, 2) not null default 0,
  created_at timestamptz not null default now(),
  -- lets the app "upsert" a budget by (user, category)
  unique (user_id, category)
);

-- ---------------------------------------------------------------------
-- transactions: one-off expenses and income (manual or CSV import)
-- ---------------------------------------------------------------------
create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  description text not null,
  amount numeric(12, 2) not null default 0,
  category text not null default 'Other',
  date date not null default current_date,
  is_subscription boolean not null default false,
  -- expense = money out, income = money in (paychecks, refunds, etc.)
  type text not null default 'expense'
    check (type in ('expense', 'income')),
  created_at timestamptz not null default now()
);

-- =====================================================================
-- Row Level Security
-- Without this, the anon/publishable key could read everyone's data.
-- With it, Postgres itself enforces "you can only touch rows where
-- user_id = you".
-- =====================================================================
alter table public.subscriptions enable row level security;
alter table public.budgets       enable row level security;
alter table public.transactions  enable row level security;

-- subscriptions policies
create policy "own subscriptions - select" on public.subscriptions
  for select using (auth.uid() = user_id);
create policy "own subscriptions - insert" on public.subscriptions
  for insert with check (auth.uid() = user_id);
create policy "own subscriptions - update" on public.subscriptions
  for update using (auth.uid() = user_id);
create policy "own subscriptions - delete" on public.subscriptions
  for delete using (auth.uid() = user_id);

-- budgets policies
create policy "own budgets - select" on public.budgets
  for select using (auth.uid() = user_id);
create policy "own budgets - insert" on public.budgets
  for insert with check (auth.uid() = user_id);
create policy "own budgets - update" on public.budgets
  for update using (auth.uid() = user_id);
create policy "own budgets - delete" on public.budgets
  for delete using (auth.uid() = user_id);

-- transactions policies
create policy "own transactions - select" on public.transactions
  for select using (auth.uid() = user_id);
create policy "own transactions - insert" on public.transactions
  for insert with check (auth.uid() = user_id);
create policy "own transactions - update" on public.transactions
  for update using (auth.uid() = user_id);
create policy "own transactions - delete" on public.transactions
  for delete using (auth.uid() = user_id);

-- =====================================================================
-- Migrations (safe to re-run on an existing project)
-- =====================================================================
alter table public.transactions
  add column if not exists type text not null default 'expense';

-- Add the check constraint only if it isn't there yet.
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'transactions_type_check'
  ) then
    alter table public.transactions
      add constraint transactions_type_check
      check (type in ('expense', 'income'));
  end if;
end $$;
