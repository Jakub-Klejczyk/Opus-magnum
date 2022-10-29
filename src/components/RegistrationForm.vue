<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { RouterLink } from "vue-router";
import GoogleButton from "./GoogleButton.vue";

export default defineComponent({
  name: "RegistrationForm",
  data() {
    return {
      email: "",
      pass: "",
      pass2: "",
      errorEmail: "",
      errorPass: "",
      errorPass2: "",
      errorTerms: "",
      terms: false,
      val: true,
    };
  },
  components: {
    GoogleButton,
  },
  methods: {
    ...mapActions(["signUp"]),
    async onSubmit() {
      this.errorEmail = "";
      this.errorPass = "";
      this.errorPass2 = "";

      if (!this.email) {
        this.errorEmail = "Nie podano adresu email";
      }
      if (!this.pass) {
        this.errorPass = "Nie podano hasła";
      }
      if (!this.pass) {
        this.errorPass2 = "Nie powtórzono hasła";
      }
      if (!this.terms) {
        this.errorTerms = "Akceptacja jest konieczna";
      }

      if (this.email && this.pass && this.terms) {
        this.validateData(this.email, this.pass, this.pass2);
        if (this.val) {
          try {
            await this.signUp({ email: this.email, password: this.pass });
            this.$router.push("/");
          } catch (err: unknown) {
            this.errorPass = "Niepoprawne dane logowania";
          }
        }
      }

      this.email = "";
      this.pass = "";
      this.pass2 = "";
    },
    validateData(email: string, pass: string, pass2: string) {
      const validateEmail = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      const validatePass = pass.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/);
      const validatePass2 = pass2.match(pass);

      if (!validateEmail) {
        this.errorEmail = "Niepoprawny adres e-mail";
        this.val = false;
      }
      if (!validatePass) {
        this.errorPass =
          "Hasło powinno zawierać co najmniej: jedną cyfrę, jedną wielką literę, jedną małą literę, od 6 do 20 znaków";
        this.val = false;
      }
      if (!validatePass2) {
        this.errorPass2 = "Niezgodne hasło";
        this.val = false;
      }
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="form">
      <div class="text">
        <h2>Portal Shop</h2>
        <p>Załóż konto, aby w pełni korzystać z możliwości sklepu.</p>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="form-elem">
          <label for="email">Adres e-mail:</label>
          <input type="text" name="email" v-model="email" />
          <p class="error">{{ errorEmail }}</p>
        </div>
        <div class="form-elem">
          <label for="pass">Hasło:</label>
          <input type="password" name="pass" v-model="pass" />
          <p class="error">{{ errorPass }}</p>
        </div>
        <div class="form-elem">
          <label for="pass">Powtórz hasło:</label>
          <input type="password" name="pass2" v-model="pass2" />
          <p class="error">{{ errorPass2 }}</p>
        </div>
        <div class="form-elem">
          <div class="form-reg">
            <input type="checkbox" name="terms" v-model="terms" />
            <label for="terms"
              >Akceptuje
              <RouterLink class="terms-link" to="/terms"
                >regulamin</RouterLink
              ></label
            >
          </div>
          <p class="error">{{ errorTerms }}</p>
        </div>
        <div class="form-elem">
          <input class="btn" type="submit" value="Utwórz konto" />
        </div>
      </form>
    </div>
    <div class="google-auth">
      <GoogleButton />
    </div>
    <div class="other-actions">
      <RouterLink class="link" to="/login">Posiadasz już konto?</RouterLink>
      <RouterLink class="link" to="/">Przejdź do strony sklepu</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.container {
  margin-block: 2rem;
  max-width: 40rem;
  border: 3px solid $dark-purple;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: $white;
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

input[type="checkbox"] {
  transform: scale(1.4);
}

.terms-link {
  text-decoration: none;
  color: $dark-purple;
}
</style>
