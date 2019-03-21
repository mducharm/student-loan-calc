<template>
  <form class="box">
    <div class="field">
      <label class="label">How much are you borrowing?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Principal Balance" v-model="principal">
      </div>
      <p class="help">
        Find the annual and lifetime borrowing limits
        <a
          href="https://studentaid.ed.gov/sa/types/loans/subsidized-unsubsidized#how-much"
        >here</a>.
      </p>
    </div>
    <div class="field">
      <label class="label">How many days until first/next payment?</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Days since last payment"
          v-model="daysSincePayment"
        >
        <p class="help">
          Remember: the interest of federal student loans accrues
          <i>daily</i>. Add 30 days for a month, or 365 for a year.
        </p>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child">
          <div class="field">
            <label for="program-type" class="label">Program Type</label>
            <div class="control">
              <div class="select">
                <select name="program-type" id="program-type" v-model="programType">
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Undergrad loans dropdown -->
          <div class="field" v-show="programType =='Undergraduate'">
            <label for="undergrad-loans" class="label">Loan Type:</label>
            <div class="control">
              <div class="select">
                <select name="undergrad-loans" id="undergrad-loans" v-model="selectedUndergradLoan">
                  <option value="Subsidized Loans">Subsidized Loans</option>
                  <option value="Unsubsidized Loans">Unsubsidized Loans</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Grad loans dropdown -->
          <div class="field" v-show="programType =='Graduate'">
            <label for="grad-loans" class="label">Loan Type:</label>
            <div class="control">
              <div class="select">
                <select name="grad-loans" id="grad-loans" v-model="selectedGradLoan">
                  <option value="Unsubsidized Loans">Unsubsidized Loans</option>
                  <option value="Graduate PLUS Loans">Graduate PLUS Loans</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical">
        <div class="tile is-child">
          <!-- Results -->
          <div v-show="formComplete">
            <p>At an interest rate of {{Math.round(interestRate * 1000)/10}}%, your loans would accrue ${{Math.round(dailyInterestAmount * 100) / 100}} per day.</p>
            <p>Over {{daysSincePayment}} days, your loans would accrue a total of ${{Math.round(totalInterestAmount*100)/100}}.</p>
          </div>
        </div>
        <div v-show="formComplete" class="tile is-child">
          <button class="button is-primary">Add to List</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      programType: "",
      selectedUndergradLoan: "",
      selectedGradLoan: "",
      principal: 0,
      daysSincePayment: 0
    };
  },
  computed: {
    formComplete() {
      if (
        this.programType === "Undergraduate" &&
        this.selectedUndergradLoan !== ""
      ) {
        return true;
      } else if (
        this.programType === "Graduate" &&
        this.selectedGradLoan !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    interestRate() {
      if (
        this.programType === "Undergraduate" &&
        this.selectedUndergradLoan !== ""
      ) {
        return 0.0505;
      } else if (
        this.programType === "Graduate" &&
        this.selectedGradLoan !== ""
      ) {
        if (this.selectedGradLoan === "Unsubsidized Loans") {
          return 0.066;
        } else if (this.selectedGradLoan === "Graduate PLUS Loans") {
          return 0.076;
        }
      }
    },
    interestRateFactor() {
      return this.interestRate / 365;
    },
    dailyInterestAmount() {
      return this.principal * this.interestRateFactor;
    },
    totalInterestAmount() {
      return this.principal * this.interestRateFactor * this.daysSincePayment;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
