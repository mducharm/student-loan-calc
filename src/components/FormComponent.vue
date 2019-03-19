<template>
  <div>
    <div class="field">
      <label class="label">How much are you borrowing?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Principal Balance">
      </div>
    </div>

    <div class="field">
      <label for="loan-type" class="label">Loan Type:</label>
      <div class="control">
        <div class="select">
          <select name="loan-type" id="loantype">
            <option value="Unsubsidized Loans - 6.6%">Unsubsidized Loans - 6.6%</option>
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
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
