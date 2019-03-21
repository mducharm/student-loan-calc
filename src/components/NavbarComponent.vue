<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h1 class="box logo is-size-3">$</h1>
        <!-- <img src="@/assets/android-chrome-512x512.png" alt="Dollar Sign Logo"> -->
      </a>
      <div class="navbar-item">
        <h4 class="title is-4 logo-text">Student Loan Calculator</h4>
        <!-- <i class="fas fa-chart-bar has-text-success is-size-1"></i> -->
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
