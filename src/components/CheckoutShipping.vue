<template>
  <form class="form-panel">
    <h3 class="form-panel__title">運送方式</h3>

    <label
      v-for="shipping in radioBtnShippingDetails"
      :key="shipping.id"
      :class="[
        'form-panel__shipping',
        { checked: shipping.method === shippingMethod },
      ]"
    >
      <div
        :class="[
          'form-panel__shipping__container',
          { checked: shipping.method === shippingMethod },
        ]"
      >
        <!-- 如果 @change 改變選項，就呼叫 handleShippingMethodChange 這個函式，並且把(shipping.price)這個值帶入 -->
        <input
          type="radio"
          class="form-panel__shipping__container__radio-btn"
          :id="shipping.id"
          :value="shipping.method"
          v-model="shippingMethod"
          @change="handleShippingMethodChange(shipping.price)"
        />

        <div class="form-panel__shipping__container__radio-btn-details">
          <p
            :class="[
              'form-panel__shipping__container__radio-btn-details__shipping-method',
              { checked: shipping.method === shippingMethod },
            ]"
          >
            {{ shipping.method }}
          </p>
          <p
            class="form-panel__shipping__container__radio-btn-details__shipping-days"
          >
            {{ shipping.days }}
          </p>
        </div>

        <p class="form-panel__shipping__container__radio-btn-price">
          {{ shipping.price === 0 ? "免費" : "$" + shipping.price }}
        </p>
      </div>
    </label>
  </form>
</template>

<script>
import { radioBtnShippingDetails } from "../configs/checkoutConfigs";

export default {
  name: "CheckoutShipping",

  data() {
    return {
      radioBtnShippingDetails,
      shippingMethod: "標準運送",
    };
  },

  methods: {
    // 把運費 price 用 addShippingFee 傳給爸爸 CheckoutPanel
    handleShippingMethodChange(price) {
      this.$emit("addShippingFee", {
        price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-panel {
  min-height: 288px;
  &__title {
    @extend %form-title-h3;
  }

  &__shipping {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    &__container {
      grid-column: 1/6;
      display: grid;
      grid-template-columns: 60px auto 60px;
      margin-bottom: 24px;
      position: relative;

      border-radius: 4px;
      border: 1px solid $light-gray-border;
      &:hover,
      &.checked {
        border: 1px solid $main-black;
      }

      &__radio-btn {
        @extend %radio-btn;
        margin: 20px;
        grid-column: 1/2;
        &:checked {
          border: 6px solid $main-black;
        }
      }

      &__radio-btn-details {
        color: $black;
        grid-column: 2/3;
        position: absolute;
        top: 11px;
        bottom: 11px;

        &__shipping-method {
          font-weight: 700;
          font-size: 14px;
          &.checked {
            font-weight: 400;
          }
        }
        &__shipping-days {
          font-weight: 400;
          font-size: 12px;
        }
      }

      &__radio-btn-price {
        position: absolute;
        top: 13px;
        right: 20px;

        font-weight: 400;
        color: $black;
        grid-column: 3/4;
        font-size: 12px;
      }
    }
  }
}
</style>
