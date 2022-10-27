<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      const hamburger: SVGElement | null = document.querySelector(".hamburger");
      hamburger?.classList.toggle("active-hamburger");

      const sidebar: HTMLDivElement | null =
        document.querySelector(".container");
      sidebar?.classList.toggle("active-container");
    },
  },
});
</script>

<template>
  <div>
    <nav>
      <div class="img"></div>
      <ul class="container">
        <li class="nav-elem">
          <RouterLink class="link" to="/">Strona główna</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/terms">Regulamin</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/">Kontakt</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/login">Logowanie</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/registration">Rejestracja</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/cart">Koszyk</RouterLink>
        </li>
      </ul>
    </nav>
    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="hamburger"
      @click="toggleSidebar"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

nav {
  width: 100vw;
  height: 7rem;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: $light-purple 0px 4px 10px;
}

.img {
  width: 5rem;
  height: 5rem;
  background-color: green;
}
.container {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
}

.nav-elem {
  list-style: none;
  .link {
    text-decoration: none;
    font-size: 1.1rem;
    color: $dark-purple;
    font-weight: 700;
  }
}

.hamburger {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-top: 2rem;
  margin-right: 2rem;
}

@media (max-width: 1000px) {
  .container {
    padding-top: 7rem;
    position: absolute;
    height: 100vh;
    background-color: $light-purple;
    width: 60vw;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    box-shadow: $light-purple 0px 8px 20px;
    display: none;
    .nav-elem {
      border: 3px solid $white;
      width: 80%;
      height: 4.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .link {
        color: white;
      }
    }
  }

  .hamburger {
    display: block;
    width: 3rem;
    height: 3rem;
    color: $dark-purple;
    cursor: pointer;
  }
  .active-hamburger {
    color: $white;
    transform: translateX();
  }
  .active-container {
    display: flex;
  }
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }
}
</style>
