<template>
  <div class="checkout-wrapper">
    <h2 class="checkout-wrapper__title">結帳</h2>

    <div class="checkout-wrapper__form-panel">
      <div class="checkout-wrapper__form-panel__form">
        <!-- 引入 CheckoutStep -->
        <CheckoutStep
          :currentStep="currentStep"
          :checkoutSteps="checkoutSteps"
        />

        <!-- 引入 - 1 - CheckoutAddress -->
        <CheckoutAddress v-if="currentStep === 1" />
        <!-- 引入 - 2 - CheckoutShipping -->
        <CheckoutShipping
          v-else-if="currentStep === 2"
          @addShippingFee="addShippingFee"
        />
        <!-- 引入 - 3 - CheckoutPayment -->
        <CheckoutPayment v-else />

        <!-- 引入 CheckoutStepBtn -->
        <CheckoutStepBtn
          :initialCurrentStep="currentStep"
          :totalSteps="checkoutSteps.length"
          @handleStepClick="handleStepClick"
        />
      </div>

      <div class="checkout-wrapper__form-panel__cart">
        <!-- 引入 CheckoutCart -->
        <!-- :shippingFee 是從兒子 CheckoutShipping 傳入，記得 data 要 return 才能取得 -->
        <CheckoutCart :cartProducts="cartProducts" :shippingFee="shippingFee" />
      </div>
    </div>

    <!-- 引入 Footer -->
  </div>
</template>

<script>
import { stepperConfigs } from "../configs/checkoutConfigs";
import { cartProductDetails } from "../configs/checkoutConfigs";

import CheckoutStep from "./../components/CheckoutStep";
import CheckoutAddress from "./../components/CheckoutAddress";
import CheckoutShipping from "./../components/CheckoutShipping";
import CheckoutPayment from "./../components/CheckoutPayment";
import CheckoutStepBtn from "./../components/CheckoutStepBtn";
import CheckoutCart from "./../components/CheckoutCart";

export default {
  name: "CheckoutPanel",

  components: {
    CheckoutStep,
    CheckoutAddress,
    CheckoutShipping,
    CheckoutPayment,
    CheckoutStepBtn,
    CheckoutCart,
  },

  data() {
    return {
      currentStep: 1,
      checkoutSteps: stepperConfigs,
      cartProducts: cartProductDetails,
      shippingFee: 0,
    };
  },

  methods: {
    handleStepClick(payload) {
      const { currentStep } = payload;
      this.currentStep = currentStep;
    },

    addShippingFee(payload) {
      const { price } = payload;
      this.shippingFee = price;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-wrapper {
  max-width: 1110px;
  margin: 0 auto;
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: $main-black;
    padding: 80px 0 48px 0;
  }

  &__form-panel {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    &__form {
      grid-column: 1/7;
    }
    &__cart {
      grid-column: 8/13;
    }
  }
}
</style>
