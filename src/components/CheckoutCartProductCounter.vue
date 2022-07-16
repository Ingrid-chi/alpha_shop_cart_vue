<template>
  <!-- CheckoutCart 的孫子: 控制購物籃產品件數的 btn + -, 並將統計好的數量傳給爸爸 CheckoutProductCard -->
  <div class="cart-counter">
    <button
      @click.stop.prevent="minusCount"
      :disabled="count === 0"
      class="cart-counter__btn-minus"
    >
      -
    </button>

    <p class="cart-counter__counts">
      {{ count }}
    </p>

    <button @click.stop.prevent="addCount" class="cart-counter__btn-add">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "CheckoutProductCounter",

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    addCount() {
      this.count = this.count + 1;
      // 用 $emit 把資料傳回給爸爸 名字叫 :onCountClick 的地方
      // 設定動作 action 傳給爸爸 CheckoutProductCard，爸爸會傳給爺爺 CheckoutCart ，爺爺在算錢的時候，才可以判斷 btn 是 + or -
      this.$emit("onCountClick", {
        action: "add",
      });
    },

    minusCount() {
      this.count = this.count - 1;
      this.$emit("onCountClick", {
        action: "minus",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-counter {
  display: flex;
  align-items: center;
  &__btn-minus,
  &__btn-add {
    @extend %btn-counts;
  }
  &__counts {
    width: 53px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: $black;
    padding: 0 5px;
  }
}
</style>
