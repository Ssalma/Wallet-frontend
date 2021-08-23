<template>
  <div class="home">
    <div class="wrapper">
      <div class="transaction_wrapper">
        <TransactionHistory />
      </div>
    </div>
  </div>
</template>
<script>
import TransactionHistory from "@/components/TransactionHistory.vue";
export default {
  components: {
    TransactionHistory,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.wrapper {
  color: $heading-text;
}

.transaction_wrapper {
  margin-top: 40px;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .transaction_wrapper {
    margin-top: 30px;
  }
}
</style>
