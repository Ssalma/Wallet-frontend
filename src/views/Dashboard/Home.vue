<template>
  <div class="home">
    <!-- new -->

    <div class="content_wrapper">
      <div class="hello_wrapper">
        <p>Hello Kingsley</p>
        <span><img class="hand" src="../../assets/hand.svg" alt=""/></span>
      </div>

      <div class="btn_wrapper">
        <button @click="showModal = true" class="transfer-funds">
          Transfer Funds
        </button>
        <button
          @click="showFundWalletModal = true"
          class="fund-wallet"
          id="btn"
        >
          Fund Wallet
        </button>
      </div>
    </div>

    <div class="balance_wrapper">
      <div class="balance">
        <p><span class="naira-sign">&#8358;</span>00.00</p>
        <p class="currency">Naira Balance</p>
      </div>
      <div class="balance">
        <p>$00.00</p>
        <p class="currency">Dollar Balance</p>
      </div>
    </div>
    <!-- new end -->

    <div class="wrapper">
      <div class="trans" v-if="showTable">
        <p class="title">Recent Transaction</p>
        <div class="transaction-history">
          <Table />
        </div>
      </div>
      <div v-else class="transaction_wrapper">
        <TransactionHistory />
      </div>
    </div>
    <TransferModal v-if="showModal" id="modal" />
    <FundModal v-if="showFundWalletModal" id="modal" />
  </div>
</template>
<script>
import TransactionHistory from "@/components/TransactionHistory.vue";

import TransferModal from "@/components/transferModal.vue";
import FundModal from "@/components/FundWalletModal.vue";
import Table from "@/components/TransactionTable.vue";
export default {
  components: {
    TransferModal,
    FundModal,
    TransactionHistory,
    Table,
  },
  data() {
    return {
      showModal: false,
      showFundWalletModal: false,
      showFilterModal: false,
      showTable: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.home {
  color: $heading-text;
}

.transaction_wrapper {
  margin-top: 40px;
  height: 100%;
}
.transaction-history {
  max-height: 55vh;
  overflow: auto;
}

.trans {
  margin-top: 40px;
  width: 100%;
  max-height: 60vh;
  .title {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 20px;
  }
}
#modal {
  position: absolute;
  top: 0;
  left: 0;
}

// new style

@media screen and (max-width: 768px) {
  .transaction_wrapper {
    margin-top: 30px;
  }
  .trans {
    max-width: 82vw;
  }
  .transaction-history {
    width: 100%;
    overflow: auto;
  }

  .content_wrapper {
    flex-direction: column;
  }
  .btn_wrapper {
    display: flex;
    margin-top: 24px;
  }
  .balance_wrapper {
    margin-top: 24px;
    .balance {
      width: 100%;
      width: 167px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
