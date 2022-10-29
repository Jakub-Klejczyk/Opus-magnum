<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Fold from "../components/Fold.vue";
import HighlightedProducts from "../components/HighlightedProducts.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "HomeView",
  components: { Navbar, Fold, HighlightedProducts, About, Contact, Footer },
});
</script>

<template>
  <main>
    <Navbar />
    <Fold />
    <HighlightedProducts />
    <About />
    <Contact />
    <Footer />
  </main>
</template>
