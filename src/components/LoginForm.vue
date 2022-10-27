<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { RouterLink } from "vue-router";
import GoogleButton from "./GoogleButton.vue";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      email: "",
      pass: "",
      errorEmail: "",
      errorPass: "",
    };
  },
  components: {
    GoogleButton,
  },
  methods: {
    ...mapActions(["logUser"]),
    async onSubmit() {
      this.errorEmail = "";
      this.errorPass = "";

      if (!this.email) {
        this.errorEmail = "Nie podano adresu email";
      }
      if (!this.pass) {
        this.errorPass = "Nie podano hasła";
      }
      if (this.email && this.pass) {
        try {
          await this.logUser({ email: this.email, password: this.pass });
          this.$router.push("/");
        } catch (err: unknown) {
          this.errorPass = "Niepoprawne dane logowania";
        }
      }

      this.email = "";
      this.pass = "";
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="form">
      <div class="text">
        <h2>Portal Shop</h2>
        <p>
          Zaloguj się, aby w pełni korzystać z funkcjonalności <br />w sklepie.
        </p>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="form-elem">
          <label for="email">Adres e-mail:</label>
          <input type="email" name="email" v-model="email" />
          <p class="error">{{ errorEmail }}</p>
        </div>
        <div class="form-elem">
          <label for="pass">Hasło:</label>
          <input type="password" name="pass" v-model="pass" />
          <p class="error">{{ errorPass }}</p>
        </div>
        <div class="form-elem">
          <input class="btn" type="submit" value="Zaloguj się" />
        </div>
      </form>
    </div>
    <div class="google-auth">
      <GoogleButton />
    </div>
    <div class="other-actions">
      <RouterLink class="link" to="/registration"
        >Jesteś nowym klientem?</RouterLink
      >
      <RouterLink class="link" to="/">Przejdź do strony sklepu</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.container {
  max-width: 40rem;
  border: 3px solid $dark-purple;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
}

.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.text {
  text-align: center;
  h2 {
    color: $dark-purple;
    padding-bottom: 1rem;
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
  }
}

form {
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-elem {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 1rem;
      padding: 0.4rem 0.6rem;
      border-radius: 6px;
      border: 1px solid $dark-purple;
      max-width: 90%;
    }
    .btn {
      @include btn;
    }
  }
  .error {
    color: red;
    padding-bottom: 0.5rem;
  }
}

.google-auth {
  padding-bottom: 0.5rem;
}

.google-auth,
.other-actions {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .link {
    padding-block: 0.5rem;
    text-decoration: none;
    color: $dark-purple;
  }
}
</style>
