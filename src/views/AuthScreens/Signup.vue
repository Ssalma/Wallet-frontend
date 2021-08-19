<template>
  <div class="app">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Create your account</h1>
          <p>Let's get you started</p>
        </div>
        <div class="form-card">
          <form>
            <div class="name">
              <div class="fname">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Kingsley"
                  class="input"
                />
              </div>
              <div class="fname">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Omin"
                  class="input"
                />
              </div>
            </div>
            <div class="label-input_wrapper">
              <label for="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="KOmin@gmail.com"
              />
            </div>
            <div class="label-input_wrapper">
              <label for="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="070 33322 999"
              />
            </div>
            <div class="input_wrapper">
              <label for="password">Password</label>
              <input
                :type="passwordType"
                name=""
                id="password"
                placeholder="........."
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
            <button class="btn">Create Account</button>
            <div>
              <p class="question">
                Already have an account?
                <span style="color:#1f6aec;">Sign In</span>
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

<style lang="scss" scoped src="./style.scss"></style>
