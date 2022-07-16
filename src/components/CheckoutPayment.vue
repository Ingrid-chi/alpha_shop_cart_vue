<template>
  <form class="form-panel">
    <h3 class="form-panel__title">付款資訊</h3>

    <div class="form-panel__payment">
      <div class="form-panel__payment__group-1">
        <div class="payment-input-container">
          <div class="input-title">持卡人姓名</div>
          <input
            v-model="input.name"
            class="input-border"
            type="text"
            placeholder="John Doe"
          />
        </div>
      </div>

      <div class="form-panel__payment__group-2">
        <div class="payment-input-container">
          <div class="input-title">卡號</div>
          <input
            v-model="input.cardNumber"
            class="input-border"
            type="text"
            placeholder="1111 2222 3333 4444"
          />
        </div>
      </div>

      <div class="form-panel__payment__group-3">
        <div class="payment-input-container">
          <div class="input-title">有效期限</div>
          <input
            v-model="input.validThru"
            class="input-border"
            type="text"
            placeholder="MM/YY"
          />
        </div>
      </div>

      <div class="form-panel__payment__group-4">
        <div class="payment-input-container">
          <div class="input-title">CVC / CCV</div>
          <input
            v-model="input.cvcCcv"
            class="input-border"
            type="text"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CheckoutPayment",

  data() {
    return {
      input: {
        name: "",
        cardNumber: "",
        validThru: "",
        cvcCcv: "",
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

.form-panel {
  min-height: 288px;
  &__title {
    @extend %form-title-h3;
  }

  &__payment {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 24px;

    &__group-1 {
      grid-column: 1/5;
      grid-row: 1/2;
    }
    &__group-2 {
      grid-column: 1/5;
      grid-row: 2/3;
    }
    &__group-3 {
      grid-column: 1/4;
      grid-row: 3/4;
    }
    &__group-4 {
      grid-column: 4/7;
      grid-row: 3/4;
    }
  }
}
</style>
