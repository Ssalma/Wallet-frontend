<template>
  <div class="about">
    <div class="w-logo_wrapper">
      <img src="../assets/wallet-logo.svg" alt="" />
    </div>
    <div class="text_wrapper">
      <h1>Wallet</h1>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.about {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f6aec;
  color: #ffffff;

  img {
    width: 394.8px;
    height: 342.84px;
  }
}
.text_wrapper {
  width: 289px;
  height: 154px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 100px;
    line-height: 153px;
    text-align: center;
    font-weight: 300;
  }
}
</style>
