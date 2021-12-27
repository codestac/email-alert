<template>
  <div class="container">
    <Header title="Email Alert" />
    <!-- <Alerts :alerts="alerts" /> -->
    <AlertForm @add-alert="addAlert" />
    <Button text="Test Alert" @btn-click="fetchAlerts" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Alerts from "./components/Alerts.vue"; // To view the list of alerts.
import AlertForm from "./components/AlertForm.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Header,
    // Alerts,
    AlertForm,
    Button,
  },
  data() {
    return {
      alerts: [],
    };
  },
  methods: {
    /** Triggered when button is clicked
     * @function addAlert
     * This adds the alert to the list of alerts
     */
    async addAlert(alert) {
      const res = await fetch("api/alerts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(alert),
      });

      const data = await res.json();
      this.alerts = [...this.alerts, data];
    },
    /** Triggered when button is clicked
     * @function fetchAlerts
     * Get the response alerts
     */
    async fetchAlerts() {
      const res = await fetch("api/alerts");
      const data = await res.json();
      console.log(data);
      return data;
    },
    /** Fetch individual alerts
     * @function fetchAlert
     * Get the response alerts
     */
    async fetchAlert(id) {
      const res = await fetch(`api/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.alerts = await this.fetchAlerts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}

.container {
  max-width: 420px;
  margin: 10px auto;
  overflow: auto;
  min-height: 300px;
  box-shadow: 0 0 50px #ccc;
  padding: 30px;
  border-radius: 20px;
  background: #fff;
}

.btn {
  display: inline-block;
  background: #4595d1;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 20px 10px 0 0;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:hover {
  background: #2c3e50;
}
</style>
