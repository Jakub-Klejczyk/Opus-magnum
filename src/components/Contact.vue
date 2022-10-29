<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Contact",
  data() {
    return {
      email: "",
      title: "",
      content: "",
      company: "",
      tel: "",
      val: true,
      errorEmail: "",
      errorTitle: "",
      errorContent: "",
    };
  },
  methods: {
    ...mapActions(["addMsg"]),
    async onSubmit() {
      this.errorEmail = "";
      this.errorTitle = "";
      this.errorContent = "";

      if (!this.email) {
        this.errorEmail = "Nie podano adresu email";
      }
      if (!this.title) {
        this.errorTitle = "Nie podano tytułu wiadomości";
      }
      if (!this.content) {
        this.errorContent = "Nie podano treści wiadomości";
      }

      if (this.email && this.title && this.content) {
        this.validateData(this.email, this.tel);
        if (this.val) {
          try {
            await this.addMsg({
              company: this.company,
              content: this.content,
              email: this.email,
              tel: this.tel,
              title: this.title,
            });
            this.errorContent = "Wysłano wiadomość";
          } catch (err: unknown) {
            this.errorContent = "Nie udało się wysłać wiadomości";
          }
        }
      }

      this.email = "";
      this.title = "";
      this.content = "";
      this.company = "";
      this.tel = "";
    },
    validateData(email: string, tel: string) {
      const validateEmail = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (!validateEmail) {
        this.errorEmail = "Niepoprawny adres e-mail";
        this.val = false;
      }
    },
  },
});
</script>

<template>
  <section class="container">
    <h2>Skontaktuj się z nami</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-elem">
        <label for="email">Twój e-mail</label>
        <input type="text" name="email" v-model="email" />
        <p class="error">{{ errorEmail }}</p>
      </div>
      <div class="form-elem">
        <label for="title">Temat</label>
        <input type="text" name="title" v-model="title" />
        <p class="error">{{ errorTitle }}</p>
      </div>
      <div class="form-elem">
        <label for="company">Firma</label>
        <input type="text" name="company" v-model="company" />
      </div>
      <div class="form-elem">
        <label for="tel">Numer telefonu</label>
        <input type="number" name="tel" v-model="tel" />
      </div>
      <div class="form-elem">
        <label for="content">Treść wiadomości</label>
        <textarea
          rows="8"
          cols="33"
          type="text"
          name="content"
          v-model="content"
        />
        <p class="error">{{ errorContent }}</p>
      </div>
      <div class="form-elem">
        <input class="btn" type="submit" value="Wyślij wiadomość" />
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.container {
  padding-inline: 10%;
  background-color: $white;
  padding-bottom: 2rem;
}

h2 {
  color: $dark-purple;
  padding-bottom: 2rem;
}

.form-elem {
  display: flex;
  flex-direction: column;
  input,
  textarea {
    margin-block: 1rem;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    border: 1px solid $dark-purple;
    max-width: 32rem;
    background-color: $white;
  }
  .btn {
    @include btn;
    max-width: 12rem;
  }
  .error {
    color: red;
    padding-bottom: 0.5rem;
  }
}
</style>
