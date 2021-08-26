<template>
  <div class="container-wrapper">
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
        <Table />
      </div>
    </div>
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
    <FilterModal class="filter-modal" v-if="showFilterModal" />
  </div>
</template>

<script>
import FilterModal from "@/components/FilterModal.vue";
import Table from "@/components/TransactionTable.vue";
export default {
  components: {
    FilterModal,
    Table,
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
  max-height: 80vh;
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
  position: relative;
  margin: 0 20px 0 465px;
}
.search-icon {
  position: absolute;
  right: 6px;
  top: 6px;
  cursor: pointer;
}

// transaction history style

.transaction-history {
  overflow: auto;
  max-width: 78vw;
  max-height: 70vh;
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .transaction-history {
    width: 100%;
    max-width: 85vw;
    max-height: 90vh;
  }
  .container {
    width: 100%;
    max-width: 85vw;
    max-height: 77.5vh;
  }

  .search-wrapper {
    display: grid;
    grid-gap: 10px;
    input {
      width: 348px;
      z-index: 2;
    }
  }
  .search-input-wrapper {
    margin: 0;
  }
  .footer {
    width: 84%;
    padding: 20px 0;
    justify-content: space-between;
    height: 80px;
    position: absolute;
    bottom: 0;
    margin: 0;
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
