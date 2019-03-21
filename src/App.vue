<template>
  <div id="app" class="is-clipped">
    <NavbarComponent @about="aboutActive = true;"/>
    <div class="columns">
      <div class="column">
        <FormComponent @loan-data="addLoanData($event)"/>
      </div>
      <div class="column">
        <LoanList :loans="loans"/>
      </div>
    </div>
    <About :class="{'is-active': aboutActive}" @close-about="aboutActive = false;"/>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import About from "./components/About.vue";
import LoanList from "./components/LoanList.vue";

export default {
  name: "app",
  components: {
    FormComponent,
    NavbarComponent,
    About,
    LoanList
  },
  data() {
    return {
      loans: [],
      aboutActive: false
    };
  },
  methods: {
    addLoanData(loanData) {
      this.loans.push(loanData);
      // console.log(loanData);
    }
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app {
  /* background-image: url("./assets/kim-gorga-540855-unsplash.jpg"); */
  background-image: url("./assets/steve-johnson-605822-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  min-height: 100vh;
}
</style>
