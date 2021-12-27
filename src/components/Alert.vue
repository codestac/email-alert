<template>
  <div class="alert">
    <h3>{{ alert.text }}</h3>
    <p>{{ alert.frequency }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alert: Object,
  },
};
</script>

<style scope>
.alert {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
