<template>
  <div class="box">
    <p>Add loans below to compare loans or estimate the cost of your degree.</p>
    <br>

    <div class="box">
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
    </div>
    <div class="box">
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
    </div>
    <div class="box">
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
    </div>
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
</style>
