<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import type Portal from "@/types/Portal";

export default defineComponent({
  name: "HighlightedProducts",
  data() {
    return {
      //  set type
      portals: [] as Portal[],
    };
  },
  methods: {
    ...mapGetters(["getHighlightedProducts"]),
  },
  mounted() {
    this.portals = this.getHighlightedProducts();
  },
});
</script>

<template>
  <div class="section">
    <h2 class="title">Nasze najlepsze portale!</h2>
    <section class="container">
      <div class="card" v-for="portal in portals" :key="portal.id">
        <img src="" :alt="portal.place" />
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
  grid-template-columns: repeat(3, 18rem);
  grid-template-rows: auto;
  gap: 6rem;
  justify-content: center;
  align-content: center;
}

.card {
  @include card;
}

@media (max-width: 1100px) {
  .container {
    grid-template-columns: repeat(2, 18rem);
  }
}

@media (max-width: 750px) {
  .container {
    grid-template-columns: repeat(1, 18rem);
  }
}
</style>
