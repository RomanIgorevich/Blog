<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email">Логин: </AppInput>
        <AppInput type="password" v-model="user.password">Пароль: </AppInput>
        <div class="controls">
          <AppButton>Войти</AppButton>
          <p style="padding-top:30px;">Логин: admin@admin.ru</p>
          <p>Пароль: 111111</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((e) => {
          console.log(e);
          this.user.email = "";
          this.user.password = "";
        });
    },
  },
};
</script>

<style lang="scss">
.auth {
  text-align: center;
  padding-top: 100px;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  input {
    min-width: 460px;
  }
}
</style>
