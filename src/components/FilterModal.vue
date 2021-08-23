<template>
  <div class="modal" v-if="closeModal">
    <div class="white-layer">
      <div class="transfer">
        <p>Filter</p>
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
            <div class="input_wrapper">
              <label id="label" for="">Transaction Type</label>
              <select name="" id="">
                <option value="">Wallet Transfer</option>
                <option value="">Wallet Deposit</option>
              </select>
            </div>
            <div class="date-input-wrapper">
              <div>
                <label for="">Start Date</label>
                <input type="date" name="" id="" placeholder="20-02-2021" />
              </div>
              <div>
                <label for="">End Date</label>
                <input type="date" name="" id="" placeholder="20-02-2021" />
              </div>
            </div>
            <div class="radio-wrapper">
              <p>Transaction Status</p>
              <input type="radio" name="" id="" />
              <span class="span-successful">Successful</span>
              <input type="radio" name="" id="" /> <span>Failed</span>
            </div>
            <button class="btn" id="search-btn">Apply Search</button>
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
  width: 100%;
  max-width: 432px;
}

.form-wrapper {
  padding: 0 32px 0 32px;
  margin-top: 40px;
}

form {
  color: $heading-text;
  select {
    width: 432px;
    height: 48px;
    padding: 12px;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: $heading-text;
    option {
      font-size: 16px;
      font-weight: 400;
      color: $heading-text;
    }
  }
  label {
    font-size: $label-font-size;
    color: $grey-text2;
  }
}
input {
  margin-top: 8px;
}
.date-input-wrapper {
  display: flex;
  margin: 24px 0 32px 0;
  input {
    width: 204px;
    height: 48px;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    padding: 16px;
  }
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
  .span-successful {
    margin-right: 80px;
  }
}

@media screen and (max-width: 768px) {
  .modal {
    justify-content: center;
    align-items: center;
    .white-layer {
      width: 280px;
      height: 80vh;
    }
  }
  form {
    width: 100%;
    select {
      width: 100%;
    }
  }
  .date-input-wrapper {
    display: grid;
    grid-gap: 10px;
  }

  .radio-wrapper .span-successful {
    margin-right: 20px;
  }
}
</style>
