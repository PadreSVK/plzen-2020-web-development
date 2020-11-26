<template>
  <input placeholder="Search" type="text" v-model="search" />
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(newVal) {
      this.$emit("queryUpdated", { query: newVal });
    },
  },
};
</script>