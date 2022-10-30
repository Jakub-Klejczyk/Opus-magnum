<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import type Portal from "@/types/Portal";

export default defineComponent({
  name: "HighlightedProducts",
  data() {
    return {
      portals: [] as Portal[],
      loaded: false,
    };
  },
  methods: {
    ...mapGetters(["getHighlightedProducts"]),
    ...mapActions(["getPortals"]),
    getImgUrl(place: string) {
      return `../assets/brand/${place}.png`;
    },
  },
  mounted() {
    this.getPortals().then(() => {
      this.portals = this.getHighlightedProducts();
      this.loaded = true;
    });
  },
});
</script>

<template>
  <div class="section">
    <h2 class="title">Nasze najlepsze portale!</h2>
    <section class="container" v-if="loaded">
      <div class="card" v-for="portal in portals" :key="portal.id">
        <img
          :src="'../assets/brand/' + portal.place + '.png'"
          :alt="portal.place"
        />
        <div class="text">
          <h3>{{ portal.place }}</h3>
          <p>Cena: {{ portal.price }} zł</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.section {
  background-color: $dark-purple;
  width: 100vw;
}

.title {
  padding-top: 3rem;
  text-align: center;
  color: $white;
}

.container {
  padding-block: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  grid-template-rows: auto;
  gap: 6rem;
  justify-content: center;
  align-content: center;
}

.card {
  @include card;
}
</style>
