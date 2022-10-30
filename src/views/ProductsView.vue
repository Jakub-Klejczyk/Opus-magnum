<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Products from "../components/Products.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "ProductsView",
  components: { Navbar, Products, Footer },
});
</script>

<template>
  <main>
    <Navbar />
    <Products />
    <Footer />
  </main>
</template>
