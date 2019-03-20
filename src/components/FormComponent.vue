<template>
  <div>
    <div class="field">
      <label class="label">How much are you borrowing?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Principal Balance">
      </div>
    </div>

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
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      programType: "",
      selectedUndergradLoan: "",
      selectedGradLoan: ""
    };
  },
  computed: {
    interestRate() {
      if (
        this.programType === "Undergraduate" &&
        this.selectedUndergradLoan !== ""
      ) {
        return .0505;
      } else if (
        this.programType === "Graduate" &&
        this.selectedGradLoan !== ""
      ) {
        if (this.selectedGradLoan === "Unsubsidized Loans") {
          return .066
        } else if (this.selectedGradLoan === "Graduate PLUS Loans") {
          return .076
        }
      }
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
