<template>
  <main>
    <Sidebar class="sidebar" />
    <div class="dashboard-content">
      <div class="nav">
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
          <div class="close-profile">
            <img
              @click="showProfile = false"
              src="../../assets/Close.svg"
              alt=""
            />
            <span class="hide">Close</span>
          </div>
          <div class="profile-picture"></div>
          <p>Kingsley Omin</p>
          <button id="logout-btn">Log Out</button>
        </div>
        <span class=""
          ><img
            @click="showProfile = true"
            class="arrow"
            src="../../assets/arrow.svg"
            alt=""
        /></span>
      </div>
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
    width: 100%;
    padding: 0 32px 0 32px;
  }
}
.menu-nav {
  display: none;
}
.ham-wrapper {
  display: none;
}
#hamburger {
  display: none;
}
.log-out {
  background-color: #ffffff;
  width: 200px;
  height: 250px;
  padding: 20px;
  z-index: 9;
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
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    background-image: url("../../assets/woman.png");
    background-size: cover;
    transition: width 1s, height 1s;
    cursor: pointer;
    &:hover {
      width: 150px;
      height: 150px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
#logout-btn:hover {
  color: $red-accent;
}
.close-profile {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    &:hover + .hide {
      position: absolute;
      left: -10px;
      display: block;
      color: $red-accent;
      font-size: 12px;
    }
  }
}
.hide {
  display: none;
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

.hand {
  animation-name: wave-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  cursor: pointer;
  &:hover {
    width: 40px;
    height: 40px;
  }
}
@keyframes wave-animation {
  //  20% { transform: rotate(-8.0deg) }
  //  30% { transform: rotate(14.0deg) }
  40% {
    transform: rotate(60deg);
  }
  //  50% { transform: rotate(10.0deg) }
  //  60% { transform: rotate( 0.0deg) }
}

%btns {
  width: 167px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba($heading-text, 0.2);
  }
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
  width: 100%;
  display: flex;
  margin-bottom: 16px;
}
.balance_wrapper {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
}
.btn_wrapper {
  display: flex;
}
.balance {
  width: 100%;
  max-width: 552px;
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
  width: 100%;
  display: flex;
  p {
    font-size: $normal-text-size;
    font-weight: 600;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px $grey-text;
    }
  }
}
.naira-sign {
  content: "\20A6";
}

// menu-nav styles
.link_wrapper {
  width: 100%;
  max-width: 216px;
  height: 40px;
  display: flex;
  align-items: center;

  margin: 0 0 8px 16px;
  a {
    text-decoration: none;
    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
}

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
      width: 100%;
      width: 167px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .nav {
    margin-bottom: 15px;
    justify-content: flex-start;
    .notification {
      margin-right: 1rem;
    }
    .user-name {
      margin-right: 3rem;
    }
  }
  .grey-circle {
    margin-right: 1rem;
  }

  .popup-wrapper {
    width: 160px;
    height: 110px;
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
    margin-right: 5rem;
  }
  #hamburger {
    display: none;
  }
  #hamburger:checked ~ .menu-nav {
    display: block;
    position: absolute;
    top: 60px;
    left: 32px;
    width: 100%;
    max-width: 350px;
    height: 200px;
    padding: 22px 22px 22px 6rem;
    background-color: $heading-text;
    border: 1px solid $heading-text;
    border-radius: 5px;
    opacity: 0.9;
  }

  .log-out {
    top: 60px;
    right: 32px;
    // opacity: 0.9;
    background-color: $heading-text;
    color: #ffffff;
  }
}
</style>
