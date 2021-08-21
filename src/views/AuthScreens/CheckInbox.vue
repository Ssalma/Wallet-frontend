<template>
  <div class="app">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Reset Password</h1>
          <p>
            we have sent a reset link to your <br />
            registered email address.
          </p>
        </div>
        <div class="form-card">
          <div class="mail-content">
            <div class="mail-box">
              <img src="../../assets/mailBox.svg" alt="" />
            </div>
            <div>
              <p class="check-your-inbox">Check Your Inbox</p>
              <p class="reset-link" style="color:#6d7a98">
                Password reset link has been sent to your inbox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 421px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    padding: 40px 32px 40px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    .mail-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 61px;
    }
  }
}
.mail-box {
  width: 165.17px;
  height: 161px;
}
.check-your-inbox {
  color: $heading-text;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.76px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
}
.reset-link {
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .content .form-card {
    width: 90%;
    form {
      width: 100%;
    }
  }

  .app .body {
    width: 100%;
    height: 100%;
  }
  .title-card {
    padding: 0 15px;
    margin-bottom: 15px;
    p {
      font-size: 25px;
    }
  }
}
</style>
