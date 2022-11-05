<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../store/index";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    ...mapActions(["logOut"]),
    ...mapGetters(["getUser"]),
    ...mapMutations(["removeDisableScroll"]),

    toggleSidebar() {
      const hamburger: SVGElement | null = document.querySelector(".hamburger");
      hamburger?.classList.toggle("active-hamburger");

      const sidebar: HTMLDivElement | null =
        document.querySelector(".container");
      sidebar?.classList.toggle("active-container");

      const body: HTMLBodyElement | null = document.querySelector("body");
      body?.classList.add("disable-scroll");
    },
  },
  computed: {
    countCart() {
      return store.state.portalsCart.length;
    },
  },
  watch: {
    countCart(newVal, oldVal) {},
  },
});
</script>

<template>
  <div>
    <nav>
      <RouterLink class="link" to="/"
        ><img class="img" src="../assets/brand/logo.png" alt="logo Portal Shop"
      /></RouterLink>

      <ul class="container">
        <li class="nav-elem">
          <RouterLink class="link" to="/" @click="removeDisableScroll()"
            >Strona główna</RouterLink
          >
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/products" @click="removeDisableScroll()"
            >Portale</RouterLink
          >
        </li>
        <li class="nav-elem">
          <RouterLink class="link" to="/terms" @click="removeDisableScroll()"
            >Regulamin</RouterLink
          >
        </li>
        <li class="nav-elem" v-if="!getUser()">
          <RouterLink class="link" to="/login">Logowanie</RouterLink>
        </li>
        <li class="nav-elem" v-if="!getUser()">
          <RouterLink class="link" to="/registration">Rejestracja</RouterLink>
        </li>
        <li
          :class="countCart > 0 ? 'nav-elem cart' : 'nav-elem'"
          :data-count="countCart"
        >
          <RouterLink class="link" to="/cart" @click="removeDisableScroll()"
            >Koszyk</RouterLink
          >
        </li>
        <li
          @click="logOut, removeDisableScroll()"
          class="nav-elem logout"
          v-if="getUser()"
        >
          Wyloguj
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
  align-items: center;
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
}

.logout {
  text-decoration: none;
  font-size: 1.1rem;
  color: $dark-purple;
  font-weight: 700;
  cursor: pointer;
}
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart::after {
  content: attr(data-count);
  position: relative;
  top: -0.75rem;
  right: -0.75rem;
  width: 2.2rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: $light-purple;
  color: white;
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
