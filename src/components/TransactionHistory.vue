<template>
  <div class="trans">
    <p class="title">Transaction History</p>
    <div class="transaction-history">
      <div class="trans-icon">
        <img src="../assets/transaction.svg" alt="icon" />
      </div>
      <p>No Transactions</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.trans {
  .title {
    font-size: 20px;
    font-weight: 600px;
  }
}

.transaction-history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 104px;
  p {
    font-size: 16px;
    margin-top: 16px;
  }
}
.trans-icon {
  width: 85px;
  height: 96px;
  img {
    width: 85px;
    height: 96px;
  }
}
</style>
