<template>
  <div class="cart-panel">
    <h4 class="cart-panel__title">購物籃</h4>

    <div
      v-for="product in products"
      :key="product.id"
      class="cart-panel__product"
    >
      <!-- 引入 兒子 CheckoutCartProductCard(算各個錢); 兒子會引入孫子 CheckoutCartProductCounter(算件數) -->
      <CheckoutCartProductCard
        @onCountClick="onCountClick"
        :initialProduct="product"
      />
    </div>

    <div class="cart-total">
      <div class="cart-total__line"></div>
      <div class="cart-total__shipping">
        <div class="cart-total__shipping__title">運費</div>
        <div class="cart-total__shipping__price">免費</div>
      </div>

      <div class="cart-total__line"></div>
      <div class="cart-total__subtotal">
        <div class="cart-total__subtotal__title">小計</div>
        <div class="cart-total__subtotal__price">
          <!-- 總價錢 + 運費 -->
          {{ totalPrice + shippingFee }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartProductDetails } from "./../configs/checkoutConfigs";
import CheckoutCartProductCard from "./../components/CheckoutCartProductCard";

export default {
  name: "CheckoutCart",

  components: {
    CheckoutCartProductCard,
  },

  props: {
    // 從兄弟 shippingFee 傳給爸爸 CheckoutPanel，再從爸爸傳過來，所以用 props 取的資料
    shippingFee: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      products: cartProductDetails,
      totalPrice: 0,
    };
  },

  methods: {
    // 收到從兒子 CheckoutCartProductCard 傳來的 { price, action }
    // if (action === "add") 從孫子 CheckoutCartProductCounter 來判斷
    onCountClick(totalCount) {
      const { price, action } = totalCount;
      if (action === "add") {
        this.totalPrice += price;
      } else {
        this.totalPrice -= price;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-panel {
  width: 440px;
  height: 492px;
  border: 1px solid $light-gray-border;
  border-radius: 8px;
  padding: 32px 24px;
  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $main-black;
  }
}

.cart-total {
  &__line {
    width: 392px;
    height: 1px;
    background-color: $light-gray-border;
    margin: 32px 0 16px 0;
  }

  &__shipping,
  &__subtotal {
    display: flex;
    justify-content: space-between;
    &__title {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $main-black;
    }
    &__price {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: $black;
    }
  }
}
</style>
