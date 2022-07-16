<template>
  <div class="header">
    <ul class="header__header-menu">
      <li class="header__header-menu__header-menu-item">menu</li>
    </ul>

    <div class="header__header-logo">
      <p>logo</p>
    </div>

    <div class="header__header-active-icon">
      <p class="header__header-active-icon__header-active-icon-item">icon</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $main-black;
  color: $white;

  max-width: 1110px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;

  &__header-menu {
    display: flex;
    justify-content: start;
    &__header-menu-item {
      padding-right: 32px;
    }
  }
  &__header-logo {
    display: flex;
    justify-content: center;
  }
  &__header-active-icon {
    display: flex;
    justify-content: end;
    &__header-active-icon-item {
      padding-left: 32px;
    }
  }
}
</style>
