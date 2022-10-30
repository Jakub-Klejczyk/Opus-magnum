<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import type Portal from "@/types/Portal";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Product",
  data() {
    return {
      portals: [] as Portal[],
      sortedPortals: [] as Portal[],
    };
  },
  methods: {
    ...mapGetters(["displayPortals"]),
    ...mapMutations(["setPortalsCart"]),
    sortPortals(color: string) {
      this.sortedPortals = this.portals.filter((elem) => {
        return elem.portal === color;
      });
      console.log(this.sortedPortals);
    },
    displayAll() {
      this.sortedPortals = this.portals;
    },
    addToCart(id: string) {
      const index = this.portals.findIndex((e) => e.id == id);
      this.setPortalsCart(this.portals[index]);
    },
  },
  mounted() {
    this.portals = this.displayPortals();
    this.sortedPortals = this.portals;
  },
});
</script>

<template>
  <section class="container">
    <h2>Portale</h2>
    <div class="sort-container">
      <p>Sortuj według koloru portali:</p>
      <button @click="displayAll()">Wszystkie</button>
      <button @click="sortPortals('purple')">Fioletowy</button>
      <button @click="sortPortals('blue')">Niebieski</button>
      <button @click="sortPortals('yellow')">Żółty</button>
      <button @click="sortPortals('orange')">Pomarańczowy</button>
    </div>
    <div class="products">
      <div class="card" v-for="portal in sortedPortals" :key="portal.id">
        <img src="" :alt="portal.place" />
        <div class="text">
          <h3>{{ portal.place }}</h3>
          <p>Cena: {{ portal.price }} zł</p>
        </div>
        <button @click="addToCart(portal.id)">Dodaj do koszyka</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.container {
  padding: 4rem 10% 0 10%;
}

h2 {
  color: $dark-purple;
  padding-bottom: 2rem;
}

.sort-container {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 4rem;
  button {
    @include btn;
  }
}

.products {
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  grid-template-rows: auto;
  gap: 6rem;
  justify-content: center;
  align-content: center;
}

.card {
  @include card;
  button {
    @include btn;
  }
}
</style>
