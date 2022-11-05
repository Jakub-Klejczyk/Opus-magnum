<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import type Portal from "@/types/Portal";

// import Denmark from "../assets/brand/Denmark.png";

// import Fiordy from "../assets/brand/Fiordy.png";
// import Hawaje from "../assets/brand/Hawaje.png";
// import Irlandia from "../assets/brand/Irlandia.png";
// import Islandiapołudniowa from "../assets/brand/Islandia południowa.png";
// import Islandia from "../assets/brand/Islandia.png";
// import Kanada from "../assets/brand/Kanada.png";
// import Kilimandżaro from "../assets/brand/Kilimandżaro.png";
// import Norwegia from "../assets/brand/Norwegia.png";
// import NowaZelandia from "../assets/brand/Norwegia.png";
// import Szwajcaria from "../assets/brand/Szwajcaria.png";
// import Szwecja from "../assets/brand/Szwecja.png";

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
  },
  mounted() {
    this.getPortals().then(() => {
      this.portals = this.getHighlightedProducts();
      console.log(this.portals[0].img);
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
        <img :src="portal.img" :alt="portal.place" />
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
