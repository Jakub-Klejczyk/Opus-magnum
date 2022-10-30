<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
  data() {
    return {
      url: window.location.href,
    };
  },
});
</script>

<template>
  <section>
    <h1>Error 404</h1>
    <p>Strona o tym adresie nie istnieje: {{ url }}</p>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

section {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  margin-top: 2rem;
  color: $dark-purple;
  padding-bottom: 2rem;
}
</style>
