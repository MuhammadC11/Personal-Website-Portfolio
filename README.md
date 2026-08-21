# BudgetPilot

A self-hosted, RocketMoney-style budgeting app. Track subscriptions, log expenses and income, set category budgets, and see your spend at a glance. Built with **Vue 3 + Vite** and **Supabase** (Postgres + Auth). No Tailwind — plain, themeable CSS.

## Features

- Email/password auth (Supabase) with route guards
- Subscriptions: CRUD, search/sort, overdue flags, one-click "Mark renewed"
- Transactions: expenses + income, search, month/category/type/date filters
- CSV import: column mapping, Debit/Credit (TD-style) support, duplicate detection, auto-categorize
- PDF statement import: read text-based bank statement PDFs in-browser (multi-file, year override, duplicate skip) for months CSV can’t cover
- Recurring detection: suggests possible subscriptions; dismissals remembered (clearable in Settings)
- Dashboard: month navigation, spent / income / savings rate, subscription projection, category pie, 6-month trend, upcoming renewals
- Budgets: monthly limits vs. actuals (subs + countable txs) with remaining / over-by
- Settings: theme, account, clear dismissed suggestions, money-model notes
- Light/dark theme, toasts, confirm dialogs
- Row Level Security so each user only sees their own data

## Tech stack

| Layer     | Choice                          |
| --------- | ------------------------------- |
| Frontend  | Vue 3 (`<script setup>`) + Vite |
| Routing   | Vue Router                      |
| Styling   | Plain CSS (design tokens)       |
| Backend   | Supabase (no server to run)     |
| Database  | Supabase Postgres               |
| Auth      | Supabase Auth                   |
| Charts    | Chart.js via vue-chartjs        |
| CSV       | Papa Parse (in-browser)         |

---

## Getting started

### 1. Install dependencies

```bash
export PATH="/opt/homebrew/bin:$PATH"
npm install
```

### 2. Create your Supabase project

1. Sign up at [supabase.com](https://supabase.com) and create a new project (free tier).
2. Open the **SQL Editor**, paste the contents of [`supabase_schema.sql`](./supabase_schema.sql), and click **Run**. This creates the tables, security rules, and the `transactions.type` column (`expense` | `income`).
3. **If you already ran an older schema**, re-run at least the **Migrations** section at the bottom of `supabase_schema.sql` so the `type` column exists — otherwise new saves/imports will fail.
4. Go to **Project Settings → API Keys** and copy:
   - **Project URL**
   - **Publishable key** (`sb_publishable_...`) — browser-safe. Do **not** use the secret key (`sb_secret_...`).

### 3. Add your keys

```bash
cp .env.example .env.local
```

Edit `.env.local` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.

### 4. Run it

```bash
export PATH="/opt/homebrew/bin:$PATH"
npm run dev
```

Open the printed URL (usually http://localhost:5173), create an account, and start adding data.

> **Tip:** By default Supabase requires email confirmation on sign-up. For local testing you can turn that off under **Authentication → Providers → Email → "Confirm email"**.

---

## Money model (important)

- **Spent** on the dashboard = actual transaction expenses for the selected month. It excludes Transfers, Cash, income, and rows flagged as subscription payments (those are covered by the subscription list).
- **Subscriptions / mo** = projected monthly-equivalent of active subscriptions (separate from actual spend).
- **Income** + **savings rate** = `(income − spend) ÷ income` when income &gt; 0.
- Budgets combine subscription projections + countable one-off expenses for the selected month.

---

## Project structure

```
src/
  supabase.js
  main.js
  style.css
  router/index.js
  composables/
    useAuth.js
    useSubscriptions.js
    useTransactions.js
    useBudgets.js
    usePeriod.js              # shared selected month (Dashboard + Budgets)
    useTheme.js
    useToast.js
    useConfirm.js
    useDismissedSuggestions.js
  lib/
    money.js                  # categories, formatting, month + renewal helpers
    spend.js                  # shared spend/income math + CSV fingerprints
    categorize.js             # merchant → category rules
    detect.js                 # recurring-charge detection
    parseStatementText.js     # bank statement line → transactions
    parseStatementPdf.js      # pdf.js extraction + multi-file parse
  components/
    AppNav.vue
    MonthNav.vue
    SubscriptionForm.vue
    CategoryPieChart.vue
    MonthlyBarChart.vue
    ImportCsvModal.vue
    ImportPdfModal.vue
    ToastHost.vue
    ConfirmDialog.vue
  views/
    LoginView.vue
    DashboardView.vue
    SubscriptionsView.vue
    TransactionsView.vue
    BudgetsView.vue
    SettingsView.vue
```

---

## Deploy for free (Vercel)

```bash
export PATH="/opt/homebrew/bin:$PATH"
npm run build
```

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com](https://vercel.com).
3. Add env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.
4. Deploy — Vercel redeploys on every push.

---

## Next steps / upgrade ideas

- **Email reminders** — scheduled Supabase Edge Function + [Resend](https://resend.com) free tier before renewals.
- **PWA** — manifest + service worker for home-screen install.
- **Remember CSV mappings** per bank export format.
- **OCR for scanned statement PDFs** — current PDF import only reads text-based statements.
