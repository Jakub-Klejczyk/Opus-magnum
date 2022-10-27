<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "TermsView",
  components: { Navbar },
});
</script>

<template>
  <div>
    <Navbar />
    <section>
      <h1>Regulamin strony</h1>
      <h2>§1</h2>
      <p>
        1. Zobowiązuje się podzielić swoją opinią o projekcie na adres mailowy
        <span>jakub.klejczyk16@gmail.com</span> lub za pomocą formularza
        kontaktowanego umieszczonego na stronie głównej. ;)
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

section {
  text-align: center;
}

h2 {
  padding: 2rem 0 1rem 0;
  color: $dark-purple;
}

span {
  color: $light-purple;
}
h1 {
  margin-top: 2rem;
}
</style>
