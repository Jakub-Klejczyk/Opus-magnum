import { createStore } from "vuex";
import { auth, provider } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import type User from "@/types/User";
import router from "@/router";

const store = createStore({
  state: {
    currentUser: null as null | User,
    authIsReady: false,
  },
  mutations: {
    setUser(state, user: User) {
      state.currentUser = user;
    },
    setAuthIsReady(state, payload: boolean) {
      state.authIsReady = payload;
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
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
