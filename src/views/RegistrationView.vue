<script lang="ts">
import { defineComponent } from "vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default defineComponent({
  name: "RegistrationView",
  components: { RegistrationForm },
});
</script>

<template>
  <RegistrationForm />
</template>

<style lang="scss">
@use "../assets/main.scss";
</style>
