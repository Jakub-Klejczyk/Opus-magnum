<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EndView",
});
</script>

<template>
  <section>
    <h1>Dziękują za zapoznanie się z projektem</h1>
    <h3>
      Koniecznie podziel się swoją opinią pod adresem mailowym
      <span>jakub.klejczyk16@gmail.com</span> lub za pomocą formualrza
      kontaktowego
    </h3>
    <RouterLink class="link" to="/">Powrót do strony głównej</RouterLink>
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
  color: $dark-purple;
  padding-bottom: 2rem;
}

span {
  color: $light-purple;
}

h3 {
  padding-bottom: 3rem;
}

.link {
  @include btn;
  text-decoration: none;
}
</style>
