<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { RouterLink } from "vue-router";
import type Portal from "@/types/Portal";

export default defineComponent({
  name: "Cart",
  data() {
    return {
      cartPortals: [] as Portal[],
    };
  },
  methods: {
    ...mapMutations(["delFromCart"]),
    ...mapGetters(["getUser", "getCart", "getCartTotalPrice"]),
    delPortal(id: string) {
      this.cartPortals.splice(
        this.cartPortals.findIndex((e) => e.id === id),
        1
      );

      this.delFromCart(this.cartPortals);
    },
  },
  mounted() {
    this.cartPortals = this.getCart();
  },
});
</script>

<template>
  <section class="container">
    <h2 v-if="cartPortals.length < 1">Brak produktów w koszyku</h2>
    <h2 v-else>
      Koszyk
      <span v-if="getUser()"
        >użytkownika {{ getUser().displayName || getUser().email }}</span
      >:
    </h2>

    <ul>
      <li
        v-for="portal in cartPortals"
        :key="portal.id"
        :style="{ 'border-color': portal.portal }"
      >
        <img src="" :alt="portal.place" />
        <p>{{ portal.place }}</p>
        <p>{{ portal.price }} zł</p>
        <button @click="delPortal(portal.id)">Usuń</button>
      </li>
    </ul>
    <h3 class="sum">
      Suma: {{ getCartTotalPrice() }} <span v-if="!getCart()">0</span> zł
    </h3>
    <RouterLink
      v-if="getUser()"
      class="link"
      :class="{ disabled: cartPortals.length < 1 }"
      to="/end"
      >Kup</RouterLink
    >
    <RouterLink
      v-if="!getUser()"
      class="link"
      :class="{ disabled: cartPortals.length < 1 }"
      to="/end"
      >Kup bez logowania</RouterLink
    >
  </section>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.disabled {
  pointer-events: none;
  opacity: 0.7;
}

.link,
button {
  @include btn;
  text-decoration: none;
}

h2 {
  color: $dark-purple;
  padding-bottom: 2rem;
}

.container {
  padding: 4rem 10% 4rem 10%;
}

li {
  border: 2px solid;
  border-radius: 6px;
  list-style: none;
  margin-bottom: 1rem;
  max-width: 32rem;
  padding: 0.8rem 0.4rem;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 4rem;
    height: 4rem;
    background-color: red;
  }
}

.sum {
  padding-bottom: 2rem;
}
</style>
