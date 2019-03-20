<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <i class="fas fa-chart-bar has-text-success is-size-1"></i>
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
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu"></div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="navbar-start">
          <a class="navbar-item">About</a>
          
          <a class="navbar-item">Presets</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <span class="icon">
          <i class="fas fa-hand-holding-usd has-text-success is-size-1"></i>
        </span>
        <h2>Student Loan Calculator</h2>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div class="navbar-menu">

      </div>
    </div>-->
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent"
};
</script>
<style scoped>
.logo {
  color: green;
}

.logo-text {
  /* font-family: 'Fredoka One', cursive; */
font-family: 'Fredericka the Great', cursive;
}
</style>
