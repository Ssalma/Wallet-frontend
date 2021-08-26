<template>
  <div class="app">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Forgot Password</h1>
          <p>
            Kindly enter your registered email <br />
            to reset your passsword
          </p>
        </div>
        <div class="form-card">
          <form>
            <div>
              <label for="">Email Address</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Komin@gmail.com"
              />
              <button class="btn" id="recover-password-btn">
                Recover Password
              </button>
              <p class="question">
                <router-link to="/login">Return to Log In</router-link>
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
@import "@/assets/_shared.scss";
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 264px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    padding: 40px 32px 40px 32px;
  }
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
  }
  label {
    font-size: $label-font-size;
    color: $grey-text2;
  }
}
::placeholder {
  color: $heading-text;
  font-size: $small-text-size;
  line-height: 16px;
  letter-spacing: 0.1;
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
    padding: 0 15px;

    margin-bottom: 25px;
    p {
      font-size: 24px;
    }
  }
}
</style>
