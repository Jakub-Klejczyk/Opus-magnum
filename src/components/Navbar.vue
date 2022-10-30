<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logOut"]),
    ...mapGetters(["getUser"]),
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
      <img class="img" src="../assets/brand/logo.png" alt="logo Portal Shop" />
      <ul class="container">
        <li class="nav-elem">
          <RouterLink class="link" to="/">Strona główna</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/products">Portale</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/terms">Regulamin</RouterLink>
        </li>
        <li class="nav-elem" v-if="!getUser()">
          <RouterLink class="link" to="/login">Logowanie</RouterLink>
        </li>
        <li class="nav-elem" v-if="!getUser()">
          <RouterLink class="link" to="/registration">Rejestracja</RouterLink>
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/cart">Koszyk</RouterLink>
        </li>
        <li @click="logOut" class="nav-elem" v-if="getUser()">Wyloguj</li>
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
  height: 14vh;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  box-shadow: $light-purple 0px 4px 10px;
}

.img {
  width: 5rem;
  height: 5rem;
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:last-child {
    text-decoration: none;
    font-size: 1.1rem;
    color: $dark-purple;
    font-weight: 700;
    cursor: pointer;
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
      .link,
      &:last-child {
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
