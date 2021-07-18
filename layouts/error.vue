<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Cтраница не найдена.</p>
        <nuxt-link to="/">Вернуться на главную страницу</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
}
</style>
