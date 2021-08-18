<template>
  <div class="signup">
    <div class="body">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="" />
      </div>
      <div class="content">
        <div class="title-card">
          <h1>Create your account</h1>
          <p>Lets get you started</p>
        </div>
        <div class="form-card">
          <form>
            <div class="name">
              <label for="first-name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Kingsley"
              />
              <label for="first-name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Omin"
              />
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

<style lang="scss">
$body-accent: #f4f7fc;
$heading-text: #0b2253;
$heading-text-size: 46px;
$grey-text: #b3becf;
$grey-text2: #6d7a98;
$label-font-size: 14px;
$blue: #1f6aec;

.signup {
  background-color: $body-accent;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .body {
    width: 80vw;
    margin: 0 auto;
    border: 1px solid red;
    display: block;
  }
}
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  .form-card {
    width: 528px;
    height: 554px;
    border: 1px solid green;
  }
}
</style>
