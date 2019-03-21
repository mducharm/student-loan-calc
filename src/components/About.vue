<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">About</p>
        <button class="delete" aria-label="close" @click="$emit('close-about')"></button>
      </header>
      <section class="modal-card-body">
        <p>
          This app is based off of StudentAid.gov's page on
          <a
            href="https://studentaid.ed.gov/sa/types/loans/interest-rates"
          >interest rates and interest calcuation</a>. Although it is a helpful tool for estimating interest, it's good to know exactly how this is calculated &mdash; I encourage you to check out their site for details.
        </p>
        <br>
        <p>The interest rates used in this calculator are solely for Direct Loans disbursed on or after July 1, 2018, and before July 1, 2019. Please note that interest rates for future loans may change.</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="$emit('close-about')">Okay</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
