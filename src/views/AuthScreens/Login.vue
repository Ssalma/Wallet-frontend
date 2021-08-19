<template>
  <div class="app">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Log In</h1>
          <p>Great to have you back</p>
        </div>
        <div class="form-card">
          <form>
            <div>
              <label for="">Email Address</label>
              <input type="email" name="" id="" placeholder="Komin@gmail.com" />
              <div class="input__wrapper">
                <label for="">Password</label>
                <input
                  :type="passwordType"
                  name=""
                  id="password"
                  placeholder="......."
                />
                <span class="input__icon" @click="changeType">
                  <img
                    v-if="passwordType === 'password'"
                    src="../../assets/eye-slash.svg"
                    alt=""
                  />
                  <img v-else src="../../assets/eyeopen.svg" alt="" />
                </span>
              </div>
              <p class="question">Forgot Password?</p>
              <button class="btn" id="login-btn">Log In</button>
              <p class="question" style="color:#6d7a98">
                Don't have an account?
                <span class="question">Register now</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    passwordType: "password",
  }),
  methods: {
    changeType() {
      const { passwordType } = this;
      if (passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
}

form {
  padding: 0 32px;
  display: grid;
  input {
    width: 100%;
    height: 48px;
    padding: 16px;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    margin: 7px 0 24px 0;
    &::placeholder {
      color: $heading-text;
      font-size: $small-text-size;
      line-height: 16px;
      letter-spacing: 0.1;
    }
  }
  label {
    font-size: $label-font-size;
    color: $grey-text2;
  }
  .input__wrapper {
    position: relative;
  }
  .input__icon {
    position: absolute;
    right: 20px;
    bottom: 34px;
    cursor: pointer;
  }
}
#password::placeholder {
  font-size: 20px;
  letter-spacing: 1px;
}
.question {
  color: $blue;
  margin-bottom: 24px;
}
.btn {
  margin-bottom: 24px;
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
  .app {
    height: 100vh;
  }
  .app .body {
    width: 100%;
    height: 100%;
  }
}
</style>
