<template>
  <div class="signup">
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
                <label for="first-name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Omin"
                  class="input"
                />
              </div>
            </div>
            <div class="label-input-holder">
              <label for="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="KOmin@gmail.com"
              />
            </div>
            <div class="label-input-holder">
              <label for="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="070 33322 999"
              />
            </div>
            <div class="label-input-holder">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="........."
              />
              <font-awesome-icon :icon="['fas', 'spinner']" />
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
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 554px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    display: flex;
    justify-content: center;
    form {
      width: 100%;
      padding: 0 32px;
      height: 90%;
      margin: auto;
      display: grid;
      .name {
        display: flex;
        justify-content: space-between;
        .input {
          width: 100%;
          height: 48px;
          padding: 5px;
          border: 1px solid #dee3eb;
          border-radius: 4px;
        }
      }
      .fname {
        width: 48%;
      }
    }
  }
}
::placeholder {
  color: $heading-text;
  font-size: $small-text-size;
  line-height: 16px;
  letter-spacing: 0.1;
}
#password::placeholder {
  font-size: 20px;
  letter-spacing: 1px;
}
label {
  font-size: $label-font-size;
  color: $grey-text2;
}

input {
  width: 100%;
  height: 48px;
  padding: 7px;
  border: 1px solid #dee3eb;
  border-radius: 4px;
  margin-top: 5px;
}
.btn {
  width: 100%;
  height: 48px;
  background-color: $blue;
  color: #ffffff;
  border-radius: 8px;
  font-style: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  border: none;
}
.question {
  color: $grey-text2;
  font-size: $small-text-size;
  line-height: 16px;
  letter-spacing: 0.2px;
}
</style>
