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
        <div class="notification-wrapper">
          <img
            @click="closePopup = true"
            class="notification"
            src="../../assets/bell.svg"
            alt=""
          />
          <div class="alert"></div>
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
      <router-view></router-view>
    </div>
    <CreatePinModal v-if="showCreatePinModal" id="modal" />
  </main>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import CreatePinModal from "@/components/CreatePinModal.vue";
export default {
  name: "sidebar",
  components: {
    CreatePinModal,
    Sidebar,
  },

  data() {
    return {
      showProfile: false,
      closePopup: false,
      showCreatePinModal: false,
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
    cursor: pointer;
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
  z-index: 9;

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

.notification-wrapper {
  position: relative;
  .alert {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #d66f0f;
    border-radius: 50%;
    border: 2px solid #ffffff;
    top: 0;
    right: 47px;
  }
  .notification {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
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

#logout-btn {
  @extend %btns;
  width: 100px;
  height: 35px;
  color: #ffffff;
  background-color: $blue;
  border: none;
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

  .note-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-left: 33px;
  }
  .notification-wrapper {
    .alert {
      right: 30px;
    }
  }
  .menu-nav {
    z-index: 9;
  }

  .ham-wrapper {
    display: block;
    margin-right: 4rem;
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
}
</style>
