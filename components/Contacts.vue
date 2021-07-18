<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Отправить сообщение</h2>
      <!-- message -->
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name" type="text">Имя:</AppInput>
        <AppInput v-model="user.email" type="text">Email:</AppInput>
        <AppTextArea v-model="user.text">Текст:</AppTextArea>
        <div class="controls">
          <AppButton class="btnWhite">Отправить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Отправлено!";
      // reset
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background: #4f68f4;
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
