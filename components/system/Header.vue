<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo"><nuxt-link to="/">Мой блог</nuxt-link></div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link" :to="link.url">{{
                link.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Блог", url: "/blog" },
        { title: "Обо мне", url: "/about" },
        { title: "Админ панель", url: "/admin/auth" },
      ],
    };
  },
};
</script>

<style lang="scss">
.logo a {
  color: #333;
}
.navbar-link {
  &.nuxt-link-exact-active {
    color: #4165de;
  }
}
</style>
