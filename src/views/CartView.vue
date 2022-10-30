<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Cart from "../components/Cart.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "CartView",
  components: { Navbar, Cart, Footer },
});
</script>

<template>
  <main>
    <Navbar />
    <Cart />
    <Footer class="footer" />
  </main>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
