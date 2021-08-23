<template>
  <main>
    <Sidebar class="sidebar" />
    <div class="dashboard-content">
      <div class="nav">
        <!-- <div class="ham-wrapper">
          <img src="../../assets/hamburger.svg" alt="" />
        </div> -->
        <label class="ham-wrapper" for="hamburger"
          ><img src="../../assets/hamburger.svg" alt=""
        /></label>
        <input type="checkbox" name="" id="hamburger" />
        <div class="menu-nav">
          <div class="link_wrapper">
            <img src="../../assets/home-icon.svg" alt="icon" />
            <router-link :to="{ name: 'Dashboard' }"><p>Home</p></router-link>
          </div>
          <div class="link_wrapper">
            <img src="../../assets/history-icon.svg" alt="icon" />
            <router-link :to="{ name: 'Transactions' }"
              ><p>Transactions</p></router-link
            >
          </div>
          <div class="link_wrapper">
            <img src="../../assets/profile-icon.svg" alt="icon" />
            <router-link to=""><p>Profile</p></router-link>
          </div>
        </div>
        <img
          @click="closePopup = true"
          class="notification"
          src="../../assets/notification.svg"
          alt=""
        />

        <p class="user-name">Kingsley Omin</p>
        <div @click="showProfile = true" class="grey-circle">
          <p class="abbreviation">KO</p>
        </div>
        <div class="log-out" v-if="showProfile">
          <div class="profile-picture"></div>
          <p>Kingsley Omin</p>
          <button id="logout-btn">Log Out</button>
        </div>
        <span class=""
          ><img
            @click="showProfile = false"
            class="arrow"
            src="../../assets/arrow.svg"
            alt=""
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
          <button
            @click="showFundWalletModal = true"
            class="fund-wallet"
            id="btn"
          >
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
      showFilterModal: false,
      showProfile: false,
      closePopup: false,
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
    padding: 0 32px 0 32px;
  }
}
.menu-nav {
  display: none;
}
.ham-wrapper {
  display: none;
}
.log-out {
  background-color: #ffffff;
  width: 160px;
  height: 170px;
  padding: 20px;
  position: absolute;
  top: 50px;
  color: $heading-text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  border-radius: 5px;
  border: 1px solid $blue;
  p {
    font-weight: 500;
  }
  .profile-picture {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    border: 1px solid $heading-text;
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
    cursor: pointer;
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
  cursor: pointer;

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
  cursor: pointer;
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
#logout-btn {
  @extend %btns;
  width: 100px;
  height: 35px;
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

// menu-nav styles
//  .link_wrapper {
//    width: 100%;
//     max-width: 216px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     padding-left: 16px;
//     margin: 0 0 8px 16px;
//     a {
//       text-decoration: none;
//       color: #ffffff;
//     }
//     p {
//       font-size: 14px;
//       line-height: 16px;
//       cursor: pointer;
//     }
//     img {
//       width: 16px;
//       height: 16px;
//       margin-right: 12px;
//     }
//   }

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }

  main {
    grid-template-columns: 1fr;
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
      width: 46.5%;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .nav {
    margin-bottom: 15px;
  }

  .popup-wrapper {
    width: 160px;
    height: 100px;
    right: 30px;
    padding: 9px 0 0 8px;
    .create-pin {
      margin-bottom: 5px;
      p {
        font-size: $small-text-size;
      }
      img {
        margin-right: 7px;
      }
      .close {
        img {
          right: -20px;
          top: -5px;
        }
      }
    }
  }
  .note-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-left: 33px;
  }

  .ham-wrapper {
    display: block;
    margin-right: 6rem;
  }
  #hamburger {
    display: none;
  }
}
</style>
