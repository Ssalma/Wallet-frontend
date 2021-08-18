<template>
  <div class="signup">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>OTP Verification</h1>
          <p>A code has been sent to your email</p>
        </div>
        <div class="form-card">
          <div class="title">
            <h2>Kindly enter your OTP to verify account</h2>
            <form>
              <input type="number" name="" id="" placeholder="0" />
              <input type="number" name="" id="" placeholder="0" />
              <input type="number" name="" id="" placeholder="0" />
              <input type="number" name="" id="" placeholder="0" />
            </form>
            <p>
              Didn't get the code? <span style="color:#1f6aec;">Resend</span>
            </p>
            <p>00:59</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$body-accent: #f4f7fc;
$heading-text: #0b2253;
$heading-text-size: 46px;
$medium-text-size: 30px;
$small-text-size: 14px;
$grey-text: #b3becf;
$grey-text2: #6d7a98;
$label-font-size: 14px;
$blue: #1f6aec;
$border: #dee3eb;

.signup {
  background-color: $body-accent;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .body {
    width: 80vw;
    height: 90vh;
    margin: 0 auto;
    display: block;
  }
}
.title-card {
  margin-top: 3rem;
  h1 {
    color: $heading-text;
    font-size: $heading-text-size;
    font-style: bold;
    line-height: 48px;
  }
  p {
    color: $grey-text;
    font-style: medium;
    font-size: $medium-text-size;
    line-height: 42px;
  }
}
form {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 290px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      height: 80%;
      width: 100%;
      padding: 0 32px;
      display: grid;
      margin: auto;
      h2 {
        color: $heading-text;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.2px;
        text-align: center;
      }
      p {
        color: $heading-text;
        font-size: $small-text-size;
        line-height: 24px;
        text-align: center;
      }
      input {
        width: 48px;
        height: 48px;
        margin-right: 24px;
        border-radius: 4px;
        border: 1px solid $border;
        padding-left: 19px;
        ::placeholder {
          text-align: center;
        }
      }
    }
  }
}
</style>
