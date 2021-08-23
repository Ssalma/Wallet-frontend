<template>
  <div class="modal" v-if="closeModal">
    <div class="white-layer">
      <div class="transfer">
        <span
          ><img
            @click="closeModal = false"
            src="../assets/Close.svg"
            class="close"
            alt=""
        /></span>
      </div>
      <div class="form-wrapper">
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
</template>

<script>
export default {
  data() {
    return {
      closeModal: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-end;
  .white-layer {
    width: 496px;
    height: 100vh;
    background-color: #ffffff;
    .transfer {
      height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 32px 032px;
      .close {
        cursor: pointer;
      }
      p {
        font-size: $normal-text-size;
        font-weight: 600;
      }
    }
  }
}
.title {
  h2 {
    text-align: center;
  }
}

.btn {
  max-width: 432px;
}

.form-wrapper {
  padding: 0 32px 0 32px;
  margin-top: 40px;
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

@media screen and (max-width: 768px) {
  .modal {
    justify-content: center;
    align-items: center;
    .white-layer {
      width: 290px;
      height: 50vh;
    }
  }
  form {
    width: 100%;
    input {
      margin-right: 0;
    }
  }
  form .small-input-box {
    justify-content: space-between;
  }
  .form-wrapper {
    margin-top: 10px;
  }
}
</style>
