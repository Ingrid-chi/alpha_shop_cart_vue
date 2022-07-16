<template>
  <!-- CheckoutCart 的兒子: 收到購物籃產品的件數, 算出各個產品的價錢，傳給爸爸 CheckoutProductCard-->
  <div class="cart-product-card">
    <div class="cart-product">
      <div class="cart-product__img">
        <img :src="getImg(product.image)" alt="" />
      </div>

      <div class="cart-product__details">
        <p class="cart-product__details__title">{{ product.title }}</p>

        <!-- 引入 btn + - 按鈕 -->
        <CheckoutCartProductCounter @onCountClick="onCountClick" />
      </div>

      <p class="cart-product__price">${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import CheckoutCartProductCounter from "./../components/CheckoutCartProductCounter";

export default {
  name: "CheckoutCartProductCard",

  props: {
    initialProduct: {
      type: Object,
      required: true,
    },
  },

  components: {
    CheckoutCartProductCounter,
  },

  data() {
    return {
      product: this.initialProduct,
    };
  },

  methods: {
    getImg(img) {
      return require(`../assets/${img}`);
    },

    // 收到從 CheckoutCartProductCounter 傳來的動作 {{ action }}，直接傳給 CheckoutCart action,

    onCountClick(totalCount) {
      const { action } = totalCount;
      this.$emit("onCountClick", {
        price: Number(this.product.price),
        action,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
  display: flex;
  position: relative;
  margin-top: 34px;
  &__img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    margin-right: 21px;
  }
  &__details {
    &__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $main-black;
      padding-bottom: 18px;
    }
  }
  &__price {
    position: absolute;
    right: 0;
    font-weight: 700;
    font-size: 16px;
    color: $black;
  }
}
</style>
