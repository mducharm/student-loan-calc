<template>
  <form class="box">
    <h1>Estimate Loan Interest</h1>
    <br>
    <div class="field">
      <label class="label">How much are you borrowing?</label>
      <div class="control has-icons-left">
        <input class="input" type="number" placeholder="Principal Balance" v-model="principal">
        <span class="icon is-small is-left">
          <i class="fas fa-dollar-sign"></i>
        </span>
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
          type="number"
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
          <transition name="fade">
            <div class="field" v-show="programType =='Undergraduate'">
              <label for="undergrad-loans" class="label">Loan Type:</label>
              <div class="control">
                <div class="select">
                  <select
                    name="undergrad-loans"
                    id="undergrad-loans"
                    v-model="selectedUndergradLoan"
                  >
                    <option value="Subsidized Loan">Subsidized Loan</option>
                    <option value="Unsubsidized Loan">Unsubsidized Loan</option>
                  </select>
                </div>
              </div>
            </div>
          </transition>

          <!-- Grad loans dropdown -->
          <transition name="fade">
            <div class="field" v-show="programType =='Graduate'">
              <label for="grad-loans" class="label">Loan Type:</label>
              <div class="control">
                <div class="select">
                  <select name="grad-loans" id="grad-loans" v-model="selectedGradLoan">
                    <option value="Unsubsidized Loan">Unsubsidized Loan</option>
                    <option value="Graduate PLUS Loan">Graduate PLUS Loan</option>
                  </select>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="tile is-parent is-vertical">
        <div class="tile is-child">
          <!-- Results -->
          <transition name="fade">
            <div v-show="formComplete" class="box">
              <p>At an interest rate of {{Math.round(interestRate * 10000)/100}}%, your loans would accrue ${{Math.round(dailyInterestAmount * 100) / 100}} per day.</p>
              <br>
              <p>Over {{daysSincePayment}} days, your loans would accrue a total of ${{Math.round(totalInterestAmount*100)/100}}.</p>
            </div>
          </transition>
        </div>
        <div class="tile is-child">
          <button
            type="button"
            class="button is-primary is-fullwidth"
            @click="submitLoan()"
            :disabled="!formComplete"
          >Add to List</button>
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
      principal: undefined,
      daysSincePayment: undefined
    };
  },
  computed: {
    formComplete() {
      if (this.principal == undefined || this.daysSincePayment == undefined) {
        return false;
      } else if (
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
        if (this.selectedGradLoan === "Unsubsidized Loan") {
          return 0.066;
        } else if (this.selectedGradLoan === "Graduate PLUS Loan") {
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
  methods: {
    submitLoan() {
      let loanData = [];
      if (
        this.programType === "Undergraduate" &&
        this.selectedUndergradLoan !== ""
      ) {
        loanData.push(this.selectedUndergradLoan);
      } else if (
        this.programType === "Graduate" &&
        this.selectedGradLoan !== ""
      ) {
        loanData.push(this.selectedGradLoan);
      }

      loanData.push(this.programType);
      loanData.push(this.principal);
      loanData.push(this.daysSincePayment);
      loanData.push(this.interestRate);
      loanData.push(this.interestRateFactor);
      loanData.push(this.dailyInterestAmount);
      loanData.push(this.totalInterestAmount);

      this.$emit("loan-data", loanData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
