<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="~/assets/logo.png" alt="Logo" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-end">
          <router-link to="/" class="navbar-item" @click="toggleMenu">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item" @click="toggleMenu">
            About
          </router-link>
          <router-link to="/contact" class="navbar-item" @click="toggleMenu">
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menu: [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
      ],
    }
  },
}
</script>

<style></style>
