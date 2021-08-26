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
            Create a unique password to <br />
            keep your account protected
          </p>
        </div>
        <div class="form-card">
          <form>
            <div>
              <div class="input_wrapper">
                <label for="">New Password</label>
                <input
                  :type="passwordType"
                  name=""
                  id="new-password"
                  placeholder="........."
                  class="pword"
                />
                <span class="input_icon" @click="changeType">
                  <img
                    v-if="passwordType === 'password'"
                    src="../../assets/eye-slash.svg"
                    alt=""
                  />
                  <img v-else src="../../assets/eyeopen.svg" alt="" />
                </span>
              </div>
              <div class="input_wrapper">
                <label for="">Confirm Password</label>
                <input
                  :type="passwordType"
                  name=""
                  id="confirm-password"
                  placeholder="........."
                  class="pword"
                />
                <span class="input_icon" @click="changeType">
                  <img
                    v-if="passwordType === 'password'"
                    src="../../assets/eye-slash.svg"
                    alt=""
                  />
                  <img v-else src="../../assets/eyeopen.svg" alt="" />
                </span>
              </div>

              <button class="btn" id="recover-password-btn">
                Reset Password
              </button>
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

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 320px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    padding: 40px 32px 40px 32px;
  }
}
.input_wrapper {
  position: relative;
}
.input_icon {
  position: absolute;
  right: 20px;
  bottom: 34px;
  cursor: pointer;
}
form {
  display: grid;
  input {
    width: 100%;
    height: 48px;
    padding: 7px;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    margin: 8px 0 24px 0;
    padding: 16px;
  }
  label {
    font-size: $label-font-size;
    color: $grey-text2;
  }
}
.pword::placeholder {
  color: $heading-text;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.8px;
  font-weight: 500;
}
.question {
  color: $blue;
  text-align: center;
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
  .app .body {
    width: 100%;
    height: 100%;
  }
  .title-card {
    margin-bottom: 25px;
    p {
      font-size: 24px;
    }
  }
}
</style>
