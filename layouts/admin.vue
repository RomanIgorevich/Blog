<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Cтраница администратора">
        <nuxt-link to="/admin" class="link linkWhite"> Администратор</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">
          Новый пост</nuxt-link
        >
        <nuxt-link to="/admin/comments" class="link linkWhite">
          Коментарии
        </nuxt-link>
        <span @click="logoutUser" class="link linkWhite">
          Выход
        </span>
      </Intro>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/system/Header.vue";
export default {
  components: {
    Header,
  },
  middleware: ["auth"],
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/admin/auth");
      });
    },
  },
};
</script>
