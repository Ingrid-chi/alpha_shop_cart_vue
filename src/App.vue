<template>
  <div id="alpha-shop-cart">
    <!-- 引入 Header -->
    <Header />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
