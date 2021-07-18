<template>
  <h1>Статья №{{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    //регулярка на число
    return /^\d+$/.test(params.id);
  },
};
</script>
