<template>
  <div class="trans">
    <p class="title">Recent Transaction</p>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.trans {
  margin-top: 40px;
  width: 100%;
  .title {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 20px;
  }
}

.transaction-history {
  width: 100%;
  p {
    font-size: 16px;
    margin-top: 16px;
  }
}

table {
  width: 100%;
  border-spacing: 0;
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

    th {
      font-size: 16px;
      font-weight: 400;
      text-align: inherit;
      padding-left: 24px;
    }
  }
}
td {
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
  color: #700f0f;
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
    overflow: hidden;
  }
  table tr td {
    overflow: auto;
  }
}
</style>
