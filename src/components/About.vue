<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  data() {
    return {};
  },
  methods: {},
});
</script>

<template>
  <div class="container">
    <img src="../assets/portal-left.png" alt="person entering portal" />
    <div class="text">
      <h2>Kim jesteśmy?</h2>
      <p>
        Portal Shop jest międzygalaktycznym sklepem oferującymi portale do
        najróżniejszych części świata. Gwarantujemy bezproblemowe podróże
        pomiędzy zakątkami Ziemi, wolne od turbulencji, jak w przypadku portali
        oferowanych przez czarodziejów. Z nami dotrzeć w każde miejsce.
      </p>
    </div>
    <img src="../assets/portal-right.png" alt="person leaving portal" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

img {
  height: 16rem;
}

.container {
  display: flex;
  padding-inline: 10%;
  padding-block: 4rem;
  background-color: $white;
}

.text {
  text-align: center;
  margin: auto 0;
  padding-inline: 2rem;
  h2 {
    color: $dark-purple;
    padding-bottom: 2rem;
  }
}

@media (max-width: 720px) {
  img {
    display: none;
  }
}
</style>
