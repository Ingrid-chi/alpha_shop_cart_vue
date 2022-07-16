<template>
  <div class="stepBtn-wrapper">
    <div class="stepBtn-wrapper__line"></div>

    <div class="stepBtn">
      <div
        v-if="currentStep !== 1"
        class="stepBtn__back"
        @click.stop.prevent="handelBackStepClick"
      >
        <div class="stepBtn__back__icon">←</div>
        <div class="stepBtn__back__text">上一步</div>
      </div>
      <div v-else />

      <div
        v-if="currentStep < 3"
        class="stepBtn__next"
        @click.stop.prevent="handelNextStepClick"
      >
        <div class="stepBtn__next__text">下一步</div>
        <div class="stepBtn__next__icon">→</div>
      </div>

      <div
        v-if="currentStep >= 3"
        class="stepBtn__next"
        @click.stop.prevent="handelNextStepClick"
      >
        <div class="stepBtn__next__text">確認下單</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutStepBtn",

  props: {
    initialCurrentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentStep: this.initialCurrentStep,
    };
  },

  methods: {
    handelBackStepClick() {
      if (this.currentStep !== 1) {
        this.currentStep = this.currentStep - 1;
        this.$emit("handleStepClick", {
          currentStep: this.currentStep,
        });
      }
    },

    handelNextStepClick() {
      if (this.currentStep !== this.totalStep) {
        this.currentStep = this.currentStep + 1;
        this.$emit("handleStepClick", {
          currentStep: this.currentStep,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stepBtn-wrapper__line {
  max-width: 540px;
  height: 2px;
  margin: 48px 0 24px 0;
  background-color: $btn-line-gray;
}

.stepBtn {
  max-width: 540px;
  display: flex;
  justify-content: space-between;

  &__back {
    display: flex;
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: $black;
    &__icon {
      padding-right: 12.5px;
    }
  }
  &__next {
    display: flex;
    justify-content: center;
    width: 174px;
    height: 46px;
    border-radius: 8px;
    background-color: $main-pink;
    font-weight: 500;
    font-size: 14px;
    line-height: 46px;
    color: $white;
    &__icon {
      padding-left: 12.5px;
    }
  }
}
</style>
