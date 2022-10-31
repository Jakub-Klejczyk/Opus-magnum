import { createStore } from "vuex";
import { auth, provider, emailsRef, portalsRef } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, getDocs } from "firebase/firestore";
import type User from "@/types/User";
import type Portal from "@/types/Portal";
import router from "@/router";
import type Msg from "../types/Msg";

const store = createStore({
  state: {
    currentUser: null as null | User,
    authIsReady: false,
    portals: [] as Portal[],
    portalsCart: [] as Portal[],
  },
  mutations: {
    setUser(state, user: User) {
      state.currentUser = user;
    },
    setAuthIsReady(state, payload: boolean) {
      state.authIsReady = payload;
    },
    setPortals(state, portals) {
      state.portals = portals;
    },
    setPortalsCart(state, portal) {
      state.portalsCart.unshift(portal);
    },
    delFromCart(state, portal) {
      state.portalsCart = portal;
    },
  },
  actions: {
    async signUp({ commit }, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res) {
        commit("setUser", res.user);
      } else {
        throw new Error("Nie udało się utworzyć konta, spróbuj ponownie");
      }
    },
    async logUser({ commit }, userData: User) {
      const res = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      if (res) {
        commit("setUser", res.user);
      } else {
        throw new Error("Nie udało się zalogować, spróbuj ponownie");
      }
    },
    async logUserWithGoogle({ commit }) {
      const res = await signInWithPopup(auth, provider);

      if (res) {
        commit("setUser", res.user);
        router.push("/");
      } else {
        throw new Error("Nie udało się zalogować, spróbuj ponownie");
      }
    },
    async logOut({ commit }) {
      await signOut(auth);
      commit("setUser", null);
    },
    async addMsg({ commit }, email) {
      const msg = await addDoc(emailsRef, {
        company: email.company,
        content: email.content,
        email: email.email,
        tel: email.tel,
        title: email.title,
      } as Msg);
    },
    async getPortals({ commit }) {
      const portals = await getDocs(portalsRef);
      let allPortals: Portal[] = [];
      portals.forEach((res) => {
        const portal = res.data();
        allPortals.push({
          id: res.id,
          portal: portal.portal,
          place: portal.place,
          price: portal.price,
          img: "/assets/" + portal.place + ".png",
        });
      });

      commit("setPortals", allPortals);
    },
  },
  getters: {
    getHighlightedProducts(store): Portal[] {
      let highlighterPortal: Portal[] = [];

      for (let i = 0; i < 3; i++) {
        let random: Portal =
          store.portals[Math.floor(Math.random() * store.portals.length)];

        if (!highlighterPortal.includes(random)) {
          highlighterPortal.push(random);
        } else {
          random =
            store.portals[Math.floor(Math.random() * store.portals.length)];
          highlighterPortal.push(random);
        }
      }

      return highlighterPortal;
    },
    getCart(state): Portal[] {
      return state.portalsCart;
    },
    getCartTotalPrice(store) {
      let sum: number = 0;
      store.portalsCart.forEach((portal) => {
        sum += portal.price;
      });
      return sum;
    },
    getUser(store) {
      return store.currentUser;
    },
    displayPortals(store) {
      return store.portals;
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
