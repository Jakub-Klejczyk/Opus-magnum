<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
});
</script>

<template>
  <footer>
    <p>Polityka prywatności</p>
    <p>© 2022 Portal Shop. Wszelkie prawa zastrzeżone</p>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

footer {
  background-color: $light-purple;
  text-align: center;
  padding-block: 4rem;
  position: relative;
  bottom: 0%;
  width: 100vw;
}

p:first-child {
  padding-bottom: 1rem;
}
</style>
