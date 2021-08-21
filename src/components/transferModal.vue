<template>
  <div class="modal" v-if="closeModal">
    <div class="white-layer">
      <div class="transfer">
        <p>Transfer</p>
        <span
          ><img
            @click="closeModal = false"
            src="../assets/Close.svg"
            alt=""
            class="close"
        /></span>
      </div>
      <div class="form-wrapper">
        <form>
          <div>
            <div class="radio-wrapper">
              <p>Select Wallet Type to Transfer From</p>
              <input type="radio" name="naira" id="" />
              <span class="span-naira">Naira</span>
              <input type="radio" name="dollar" id="" /> <span>Dollar</span>
            </div>
            <div class="input_wrapper">
              <label id="label" for="">Account Number</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="23456788901"
                class="inp"
              />
            </div>
            <div class="input__wrapper">
              <label id="label" for="">Amount</label>
              <input
                type="text"
                name="amount"
                id="amount-input"
                placeholder="00.00"
                class="inp"
              />
            </div>
            <div class="input__wrapper">
              <label id="label" for="">Pin</label>
              <input
                type="text"
                name="pin"
                id=""
                placeholder="****"
                class="inp"
              />
            </div>
            <button class="btn" id="transfer-btn">Transfer</button>
          </div>
        </form>
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
    // padding: 24px 32px 24px 32px;
    .transfer {
      height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #d7dce0;
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
.btn {
  width: 432px;
}

#amount-input::placeholder {
  content: "\20A6";
}

.form-wrapper {
  padding: 0 32px 0 32px;
  margin-top: 40px;
}

form {
  color: $heading-text;
  input {
    width: 432px;
    height: 48px;
    padding: 16px;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    cursor: pointer;
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
}
.inp {
  margin: 8px 0 24px 0;
}
.radio-wrapper {
  margin-bottom: 32px;
  input {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  p {
    font-weight: 500;
    color: $heading-text;
    font-size: $small-text-size;
    margin-bottom: 16px;
  }
  span {
    font-size: $small-text-size;
    font-weight: 400;
    position: relative;
    top: -4px;
  }
  .span-naira {
    margin-right: 80px;
  }
}
</style>
