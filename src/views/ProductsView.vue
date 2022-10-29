<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "ProductsView",
  components: { Navbar },
});
</script>

<template>
  <main>
    <Navbar />
  </main>
</template>
