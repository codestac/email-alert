<template>
  <header>{{ title }}</header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1em;
  color: #0a70bc;
}
</style>
