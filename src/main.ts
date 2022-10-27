import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faBars);

const app = createApp(App);

app.use(router).use(store).component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
