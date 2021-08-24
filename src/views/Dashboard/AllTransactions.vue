<template>
  <div>
    <div class="container">
      <div class="search-wrapper">
        <p class="title-header">Transactions</p>
        <div class="search-input-wrapper">
          <input type="text" name="" id="" placeholder="Search by name" />
          <span class="search-icon"
            ><img class="search-icon" src="../../assets/Search.svg" alt=""
          /></span>
        </div>
        <button @click="showFilterModal = true" class="filter-btn">
          <p>Filter</p>
          <img src="../../assets/filter-icon.svg" alt="" />
        </button>
      </div>

      <div class="transaction-history">
        <table>
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tr">
              <td>Wallet Deposit</td>
              <td>May 27, 2020 |<span>12:38 PM</span></td>
              <td>
                <div class="status-success">
                  <div class="white">
                    <div class="green"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="success">Successful</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr>
              <td>Wallet Transfer</td>
              <td>May 27, 2020 | <span>12:38 PM</span></td>
              <td>
                <div class="status-failed">
                  <div class="white">
                    <div class="red"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="failed">Failed</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr class="tr">
              <td>Wallet Deposit</td>
              <td>May 27, 2020 |<span>12:38 PM</span></td>
              <td>
                <div class="status-success">
                  <div class="white">
                    <div class="green"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="success">Successful</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr>
              <td>Wallet Transfer</td>
              <td>May 27, 2020 | <span>12:38 PM</span></td>
              <td>
                <div class="status-failed">
                  <div class="white">
                    <div class="red"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="failed">Failed</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr class="tr">
              <td>Wallet Deposit</td>
              <td>May 27, 2020 |<span>12:38 PM</span></td>
              <td>
                <div class="status-success">
                  <div class="white">
                    <div class="green"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="success">Successful</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr>
              <td>Wallet Transfer</td>
              <td>May 27, 2020 | <span>12:38 PM</span></td>
              <td>
                <div class="status-failed">
                  <div class="white">
                    <div class="red"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="failed">Failed</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>

            <tr>
              <td>Wallet Transfer</td>
              <td>May 27, 2020 | <span>12:38 PM</span></td>
              <td>
                <div class="status-failed">
                  <div class="white">
                    <div class="red"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="failed">Failed</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>
            <!-- <div class="divider"></div> -->
            <tr>
              <td>Wallet Transfer</td>
              <td>May 27, 2020 | <span>12:38 PM</span></td>
              <td>
                <div class="status-failed">
                  <div class="white">
                    <div class="red"></div>
                  </div>
                  <div class="success-wrapper">
                    <p class="failed">Failed</p>
                  </div>
                </div>
              </td>
              <td style="font-weight:500;">NGN 30, 000</td>
            </tr>
          </tbody>
        </table>
        <div class="footer">
          <p>Showing <span>page 1</span> <span> of 10</span></p>
          <div class="nav-btn-wrapper">
            <button class="prev" id="prev">Prev</button>
            <div class="but-wrapper">
              <button class="but">1</button>
              <button class="but">2</button>
              <button class="but">3</button>
              <button class="but">...</button>
              <button class="but">10</button>
            </div>
            <button class="prev" id="next">Next</button>
          </div>
        </div>
      </div>
    </div>
    <FilterModal class="filter-modal" v-if="showFilterModal" />
  </div>
</template>

<script>
import FilterModal from "@/components/FilterModal.vue";
export default {
  components: {
    FilterModal,
  },

  data() {
    return {
      showFilterModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.filter-modal {
  position: absolute;
  left: 0;
  right: 0;
}
.footer {
  width: 100%;
  bottom: auto;
  display: flex;
  margin-top: 20px;
  p {
    margin-right: 690px;
    font-size: $small-text-size;
    color: $dash-grey-text;
    span {
      color: #0d0f11;
    }
  }
  .prev {
    font-size: 12px;
    color: #3a434b;
    font-weight: 400;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    &:focus {
      background-color: rgba(47, 46, 128, 0.1);
      color: #2f2e80;
    }
  }
  .but {
    width: 23px;
    height: 24px;
    margin: 0 8px 0 8px;
    font-size: $small-text-size;
    color: #3a434b;
    font-weight: 400;
    text-align: center;
    border: none;
    background-color: #ffffff;
    &:focus {
      background-color: rgba(47, 46, 128, 0.1);
      color: #2f2e80;
    }
  }
}
.nav-btn-wrapper {
  display: flex;
}
.but-wrapper {
  padding-top: 5px;
}
.container {
  width: 100%;
  max-width: 78vw;
  margin-top: 20px;
  max-height: 60vh;
  position: absolute;
  overflow: auto;
}
.search-wrapper {
  display: flex;
  align-items: center;

  input {
    width: 400px;
    height: 40px;
    border: 1px solid $border;
    padding: 12px 16px 12px 16px;
    border-radius: 4px;
    &::placeholder {
      font-size: 16px;
      color: #677684;
    }
  }
  .title-header {
    font-size: $normal-text-size;
    font-weight: 600;
  }
  .filter-btn {
    width: 92px;
    height: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid $border;
    font-size: 14px;
    color: #3a434b;
    font-weight: 400;
    padding: 12px 16px 12px 16px;
    display: flex;
    cursor: pointer;
    p {
      margin-right: 8px;
    }
  }
}
.search-input-wrapper {
  margin: 0 40px 0 424px;
}
.search-icon {
  position: relative;
  left: -16px;
  top: 2px;
  cursor: pointer;
}

// transaction history style

.transaction-history {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  p {
    font-size: 16px;
    margin-top: 16px;
  }
}

table {
  width: 100%;
  border-spacing: 0;
  overflow: scroll;
}

table td {
  border-collapse: collapse;
  border-bottom: 1px solid rgba(22, 42, 86, 0.1);
  padding-left: 24px;
}
thead {
  width: 100%;
  background-color: #f1f4f8;
  tr {
    width: 90%;
    height: 56px;
    border: none;
    cursor: pointer;
    th {
      font-size: 16px;
      font-weight: 400;
      text-align: inherit;
      padding-left: 24px;
    }
  }
}
td {
  cursor: pointer;
  span {
    color: $grey-text;
  }
}

.status-success {
  width: 110px;
  height: 35px;
  display: inline-flex;
  background-color: #c0f2d4;
  border-radius: 4px;
  margin: 23px 0 24px 0;
  padding: 2px;
}
.success-wrapper {
  height: inherit;
  margin-top: -11px;
}
.white {
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 0 2px;
  .green {
    width: 6px;
    height: 6px;
    background-color: #1e944d;
    border-radius: 50%;
  }
}

.success {
  font-size: 12px;
  color: #166a37;
}

.failed {
  color: $red-accent;
  font-size: 12px;
}
.red {
  width: 6px;
  height: 6px;
  background-color: #9d1515;
  border-radius: 50%;
}
.status-failed {
  width: 74px;
  height: 35px;
  display: inline-flex;
  background-color: #fce9e9;
  border-radius: 4px;
  margin: 23px 0 24px 0;
  padding: 2px;
}

@media screen and (max-width: 768px) {
  .transaction-history {
    overflow: auto;
    width: 100%;
    // top: 150px;
  }
  .container {
    width: 100%;
    max-width: 85vw;
  }
  // table tr thead tbody th td {
  //   width: 100px;
  //   border: 1px solid red;
  // }

  .search-wrapper {
    display: grid;
    grid-gap: 10px;
    input {
      width: 348px;
    }
  }
  .search-icon {
    left: 10rem;
    top: -14px;
  }
  .search-input-wrapper {
    margin: 0;
  }
  .footer {
    padding: 20px;
    justify-content: space-between;
    height: 80px;
    p {
      margin: 10px 0 0 0;
    }
    .prev {
      font-size: 16px;
      margin-right: 10px;
    }
  }
  .nav-btn-wrapper {
    justify-content: center;
    align-items: center;
  }
  .but-wrapper {
    display: none;
  }
}
</style>
