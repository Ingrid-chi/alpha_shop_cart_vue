<template>
  <div class="stepper-wrapper">
    <div class="stepper-panel">
      <div class="stepper-panel__stepper" v-for="step in steps" :key="step.id">
        <!-- stepper 圓 1 -->
        <div
          :class="[
            'stepper-panel__stepper__circle',
            {
              active: isActived(step.id),
              finished: isFinished(step.id),
            },
          ]"
        >
          <!-- &#10004; 勾勾 -->
          {{ isFinished(step.id) ? "&#10004;" : step.id }}
          <!-- {{ step.id }} -->
        </div>
        <!-- stepper 字 -->
        <div
          :class="[
            'stepper-panel__stepper__title',
            {
              active: isActived(step.id),
              finished: isFinished(step.id),
            },
          ]"
        >
          {{ step.title }}
        </div>
        <!-- stepper 線 -->
        <div
          v-if="step.id !== 3"
          :class="[
            'stepper-panel__stepper__line',
            {
              active: isActived(step.id),
              finished: isFinished(step.id),
            },
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { stepperConfigs } from "../configs/checkoutConfigs";

export default {
  name: "CheckoutStep",

  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    checkoutSteps: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      // stepperConfigs,
      totalSteps: this.checkoutSteps.length,
      steps: this.checkoutSteps,
    };
  },

  methods: {
    isActived(stepId) {
      if (stepId === this.currentStep) {
        return true;
      } else return false;
    },
    isFinished(stepId) {
      if (stepId < this.currentStep) {
        return true;
      } else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper-panel {
  display: flex;
  padding-bottom: 64px;
  &__stepper {
    display: flex;
    &__circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      line-height: 24px;
      text-align: center;
      margin-right: 8px;
      color: $stepper-default;
      border: 1px solid $stepper-default;
      &.active {
        color: $stepper-active;
        border: 1px solid $stepper-active;
      }
      &.finished {
        color: $white;
        border: 1px solid $main-black;
        background-color: $main-black;
      }
    }
    &__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $stepper-default;
      &.active,
      &.finished {
        color: $main-black;
      }
    }
    &__line {
      width: 60px;
      height: 1px;
      margin: 11.5px 32px 0 32px;
      background-color: $stepper-line-default;
      &.active,
      &.finished {
        color: $white;
        background-color: $black;
      }
    }
  }
}
</style>
