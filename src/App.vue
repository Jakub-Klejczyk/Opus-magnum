<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
@use "./assets/main.scss";
</style>
