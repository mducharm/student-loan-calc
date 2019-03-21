<template>
  <div class="box">
    <h1>Compare Loans</h1>
    <p>Estimate accrued interest and compare loans here.</p>
    <br>

    <div v-for="loan in loans" :key="loan">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <!-- Loan Type -->
                <strong>{{loan[0]}}</strong>
                <br>
              </p>
            </div>
            <div class="level">
              <!-- Amount Borrowed -->
              <p>${{loan[2]}} borrowed</p>
              <!-- dailyInterestAmount -->
              <p>${{Math.round(loan[6] * 100) / 100}} accrued daily</p>
              <!-- totalInterestAmount -->
              <p>${{Math.round(loan[7]*100)/100}} over {{loan[3]}} days</p>
            </div>
          </div>
          <div class="media-right">
            <!-- Interest Rate -->
            <span class="tag is-info">{{Math.round(loan[4] * 10000)/100}}%</span>
          </div>
        </article>
      </div>
    </div>

    <!-- <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Unsubsidized Loan</strong>
              <br>
            </p>
          </div>
          <div class="level">
            <p>$2000 borrowed</p>
            <p>$1.28 accrued daily</p>
            <p>$300 over 60 days</p>
          </div>
        </div>
        <div class="media-right">
          <span class="tag is-info">6.6%</span>
        </div>
      </article>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "LoanList",
  props: ["loans"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
}
</style>
