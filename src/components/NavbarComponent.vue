<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h1 class="box logo is-size-3">$</h1>
      </a>
      <div class="navbar-item">
        <h4 class="title is-4 logo-text">Student Loan Calculator</h4>
      </div>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleNavMenu()"
        v-bind:class="{'is-active':navMenuActive}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active':navMenuActive}">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <a class="navbar-item">About</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      navMenuActive: false
    };
  },
  methods: {
    toggleNavMenu() {
      if (this.navMenuActive) {
        this.navMenuActive = false;
      } else {
        this.navMenuActive = true;
      }
    }
  }
};
</script>
<style scoped>
.logo {
  background-color: #4b8;
  color: #fff;
  border-radius: 5px;
  font-family: "Leckerli One", cursive;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 15px;
  padding-left: 15px;
}

.logo-text {
  /* font-family: 'Fredoka One', cursive; */
  /* font-family: "Fredericka the Great", cursive; */
  font-family: "Lobster", cursive;
}

.navbar {
  margin-bottom: 10px;
}
</style>
