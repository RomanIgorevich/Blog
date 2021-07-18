<template>
  <NewPostFrom @submit="onSubmit" />
</template>

<script>
import NewPostFrom from "@/components/Admin/NewPostFrom.vue";
export default {
  components: {
    NewPostFrom,
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      this.$store.dispatch("addPost", post).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
