<template>
  <div>
    <div :key="alert.id" v-for="alert in alerts">
      <Alert :alert="alert" />
    </div>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
export default {
  name: "Alerts",
  props: {
    alerts: Array,
  },
  components: {
    Alert,
  },
};
</script>

<style></style>
