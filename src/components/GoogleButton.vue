<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "GoogleButton",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logUserWithGoogle"]),
  },
});
</script>

<template>
  <button class="google-btn" @click="logUserWithGoogle">
    <img src="../assets/google.png" alt="logo Google" />
    <span>Zaloguj się z Google</span>
  </button>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.google-btn {
  width: 240px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #4285f4;
  border: 1px solid #4285f4;

  img {
    width: 45px;
    height: 100%;
  }
  span {
    padding-left: 1.6rem;
    color: white;
  }
}
</style>
