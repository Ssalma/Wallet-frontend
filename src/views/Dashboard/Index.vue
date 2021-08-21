<template>
  <main>
    <Sidebar />
    <div class="dashboard-content">
      <div class="nav">
        <img class="notification" src="../../assets/notification.svg" alt="" />
        <p class="user-name">Kingsley Omin</p>
        <div class="grey-circle">
          <p class="abbreviation">KO</p>
        </div>
        <span class=""
          ><img class="arrow" src="../../assets/arrow.svg" alt=""
        /></span>
      </div>
      <div class="content_wrapper">
        <div class="hello_wrapper">
          <p>Hello Kingsley</p>
          <span><img src="../../assets/hand.svg" alt=""/></span>
        </div>
        <div class="btn_wrapper">
          <button @click="showModal = true" class="transfer-funds">
            Transfer Funds
          </button>
          <button @click="showFundWalletModal = true" class="fund-wallet">
            Fund Wallet
          </button>
        </div>
        <div class="popup-wrapper" v-if="closePopup">
          <div class="create-pin">
            <img src="../../assets/createPin-icon.svg" alt="" />
            <p @click="showCreatePinModal = true">Create Pin</p>
            <div class="close">
              <img
                @click="closePopup = false"
                src="../../assets/Close.svg"
                alt=""
              />
            </div>
          </div>
          <p class="note-text">
            Please create your transaction pin to activate wallet.
          </p>
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
      <router-view></router-view>
    </div>
    <TransferModal v-if="showModal" />
    <FundModal v-if="showFundWalletModal" />
    <CreatePinModal v-if="showCreatePinModal" />
  </main>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import TransferModal from "@/components/transferModal.vue";
import FundModal from "@/components/FundWalletModal.vue";
import CreatePinModal from "@/components/CreatePinModal.vue";
export default {
  name: "sidebar",
  components: {
    TransferModal,
    FundModal,
    CreatePinModal,
    Sidebar,
  },

  data() {
    return {
      showModal: false,
      showFundWalletModal: false,
      showCreatePinModal: false,
      closePopup: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
main {
  display: grid;
  grid-template-columns: 250px auto;
  max-height: 100vh;
  overflow: hidden;
  color: $heading-text;

  .dashboard-content {
    overflow-y: auto;
    padding: 0 32px 0 32px;
  }
}
.popup-wrapper {
  width: 320px;
  height: 111px;
  background-color: #e7efff;
  position: absolute;
  right: 57px;
  top: 55px;
  border-top: 2px solid $blue;
  padding: 18px 0 0 16px;

  .create-pin {
    display: flex;
    margin-bottom: 10px;
    p {
      font-weight: 600;
      font-size: $normal-text-size;
      cursor: pointer;
    }
    img {
      margin-right: 14px;
    }
    .close {
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        position: relative;
        right: -105px;
        top: -10px;
      }
    }
  }
}
.note-text {
  font-size: $small-text-size;
  font-weight: 400;
  line-height: 20px;
  margin-left: 42px;
}
.nav {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .notification {
    width: 24px;
    height: 24px;
    margin-right: 3rem;
  }
  .user-name {
    color: $dash-grey-text;
    font-size: $small-text-size;
    margin-right: 8px;
  }
}
.grey-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #d7dce0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  .abbreviation {
    font-size: 12px;
    letter-spacing: 1px;
    color: #3a434b;
    line-height: 16px;
    text-align: center;
  }
}
.arrow {
  width: 12px;
  height: 6px;
}

%btns {
  width: 167px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
}

.transfer-funds {
  @extend %btns;
  color: $blue;
  background-color: #ffffff;
  border: 1px solid $blue;
  margin-right: 20px;
}
.fund-wallet {
  @extend %btns;
  color: #ffffff;
  background-color: $blue;
  border: none;
}

.content_wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.balance_wrapper {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
}
.balance {
  width: 552px;
  height: 96px;
  padding: 24px;
  border: 1px solid $border;
  border-radius: 8px;
  p {
    font-size: $normal-text-size;
    font-weight: 600;
  }
  .currency {
    color: $grey-text2;
    font-size: $small-text-size;
    font-weight: 400;
  }
}

.hello_wrapper {
  display: flex;
  p {
    font-size: $normal-text-size;
    font-weight: 600;
    margin-right: 10px;
  }
}
.naira-sign {
  content: "\20A6";
}
</style>
