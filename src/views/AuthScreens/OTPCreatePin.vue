<template>
  <div class="app">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Create Pin</h1>
          <p>
            Create pin to enable transfer
          </p>
        </div>
        <div class="form-card">
          <div class="title">
            <h2>
              Kindly create your <br />
              transaction Pin
            </h2>
            <form>
              <div class="small-input-box">
                <input type="text" name="" id="pin" placeholder="*" />
                <input type="text" name="" id="pin" placeholder="*" />
                <input type="text" name="" id="pin" placeholder="*" />
                <input type="text" name="" id="pin" placeholder="*" />
              </div>
              <button class="btn" id="create-pin-btn">
                Create Pin
              </button>
            </form>
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
    height: 288px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #dee3eb;
    padding: 40px 32px 40px 32px;
  }
}
form {
  input {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid $border;
    margin-right: 24px;
    text-align: center;
  }
  .small-input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 0 24px 0;
  }
}
::placeholder {
  font-size: 16px;
  text-align: center;
}
.title {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: $heading-text;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.2px;
    text-align: center;
  }
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
      font-size: 26px;
    }
  }
}
</style>
