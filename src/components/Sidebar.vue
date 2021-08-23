<template>
  <div class="hello">
    <aside>
      <div class="logo_wrapper">
        <img src="../assets/logo-white.svg" alt="icon" />
        <p>Wallet</p>
      </div>
      <div class="link_wrapper">
        <img src="../assets/home-icon.svg" alt="icon" />
        <router-link :to="{ name: 'Dashboard' }"><p>Home</p></router-link>
      </div>
      <div class="link_wrapper">
        <img src="../assets/history-icon.svg" alt="icon" />
        <router-link :to="{ name: 'Transactions' }"
          ><p>Transactions</p></router-link
        >
      </div>
      <div class="link_wrapper">
        <img src="../assets/profile-icon.svg" alt="icon" />
        <router-link to=""><p>Profile</p></router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";

aside {
  background: $heading-text;
  height: 100vh;
  color: #ffffff;
  .logo_wrapper {
    display: flex;
    margin-bottom: 36px;
    padding: 23px 0 0 36px;
    img {
      width: 27.6px;
      height: 24px;
      margin-right: 7px;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      text-align: center;
      cursor: pointer;
    }
  }
  .link_wrapper {
    width: 216px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 16px;
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
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }
  }
}
</style>
