<template>
  <form class="form-panel">
    <h3 class="form-panel__title">寄送地址</h3>

    <div class="form-panel__address">
      <div class="form-panel__address__group-1">
        <div class="address-input-container">
          <div class="input-title">稱謂</div>

          <div class="select-group">
            <select
              v-model="input.title"
              class="select-group__border"
              name="title"
              id=""
            >
              <option disabled value="-1">請選擇</option>
              <option>先生</option>
              <option>小姐</option>
            </select>
            <div class="select-group__icon"></div>
          </div>
        </div>
      </div>

      <div class="form-panel__address__group-2">
        <div class="address-input-container">
          <div class="input-title">姓名</div>
          <input
            v-model="input.name"
            class="input-border"
            type="text"
            placeholder="請輸入姓名"
          />
        </div>
      </div>

      <div class="form-panel__address__group-3">
        <div class="address-input-container">
          <div class="input-title">電話</div>
          <input
            v-model="input.tel"
            class="input-border"
            type="text"
            placeholder="請輸入行動電話"
          />
        </div>
      </div>

      <div class="form-panel__address__group-4">
        <div class="address-input-container">
          <div class="input-title">Email</div>
          <input
            v-model="input.email"
            class="input-border"
            type="text"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>

      <div class="form-panel__address__group-5">
        <div class="address-input-container">
          <div class="input-title">縣市</div>

          <div class="select-group">
            <select
              v-model="input.area"
              class="select-group__border"
              name="area"
              id=""
            >
              <option disabled value="-1">請選擇縣市</option>
              <option>台北</option>
              <option>高雄</option>
            </select>
            <div class="select-group__icon"></div>
          </div>
        </div>
      </div>

      <div class="form-panel__address__group-6">
        <div class="address-input-container">
          <div class="input-title">地址</div>
          <input
            v-model="input.address"
            class="input-border"
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CheckoutAddress",

  data() {
    return {
      input: {
        title: -1,
        name: "",
        tel: "",
        email: "",
        area: -1,
        address: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.input-title {
  @extend %input-title;
}

.input-border {
  @extend %input-border;
}

.select-group {
  position: relative;
  &__border {
    @extend %select-border;
  }
  &__icon {
    @extend %select-icon;
  }
}

.form-panel {
  min-height: 288px;
  &__title {
    @extend %form-title-h3;
  }

  &__address {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 24px;

    &__group-1 {
      grid-column: 1/3;
      grid-row: 1/2;
    }
    &__group-2 {
      grid-column: 3/7;
      grid-row: 1/2;
    }
    &__group-3 {
      grid-column: 1/4;
      grid-row: 2/3;
    }
    &__group-4 {
      grid-column: 4/7;
      grid-row: 2/3;
    }
    &__group-5 {
      grid-column: 1/3;
      grid-row: 3/4;
    }
    &__group-6 {
      grid-column: 3/7;
      grid-row: 3/4;
    }
  }
}
</style>
