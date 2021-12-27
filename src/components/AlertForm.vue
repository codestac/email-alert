<template>
  <form @submit="onSubmit">
    <label>Alert Message</label>
    <input type="text" required v-model="text" placeholder="Enter alert text" />
    <label>Frequency: </label>
    <div>
      <input
        type="radio"
        id="hourly"
        value="Hourly"
        name="frequency"
        v-model="frequency"
        required
      />
      <label for="hourly">Hourly</label>
      <input
        type="radio"
        id="daily"
        value="Daily"
        name="frequency"
        v-model="frequency"
      /><label for="daily">Daily</label>
    </div>
    <label>Email Recipients</label>
    <p class="assist">
      Enter multiple emails by hitting Alt + Comma after entering.
    </p>
    <input
      type="email"
      v-model="tempEmailData"
      @keyup.alt="addEmail"
      required
      placeholder="example@abc.com"
    />
    <span class="err" v-if="showInclusionErr"
      >The email is already appended or has an incorrect format, Please add a
      new Email ID.</span
    >
    <div v-for="email in emailData" :key="email" class="pill">
      {{ email }}<i @click="deleteEmail(email)" class="fas fa-times"></i>
    </div>
    <input class="submit" type="submit" text="Save" color="skyblue" />
  </form>
</template>

<script>
export default {
  name: "AlertForm",
  data() {
    return {
      text: "",
      frequency: "",
      tempEmailData: "",
      emailData: [],
      showInclusionErr: false,
    };
  },
  methods: {
    addEmail(e) {
      if (e.key === "," && this.tempEmailData) {
        if (!this.emailData.includes(this.tempEmailData)) {
          this.emailData.push(this.tempEmailData);
        } else {
          this.showInclusionErr = true;
        }
        this.tempEmailData = "";
      }
    },
    deleteEmail(email) {
      this.emailData = this.emailData.filter((item) => {
        return email != item;
      });
    },
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add an Alert!");
        return;
      }
      if (this.emailData) {
        alert("Please add atlest one Email ID!");
        return;
      }

      const newAlert = {
        text: this.text,
        frequency: this.frequency,
        emailData: this.emailData,
      };

      console.log(newAlert);
      this.$emit("add-alert", newAlert);

      this.text = "";
      this.frequency = "";
      this.emailData = "";
      this.tempEmailData = "";
      this.showInclusionErr = false;
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 10px auto;
  background: white;
  text-align: left;
  border-radius: 10px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(192, 190, 190);
}

i {
  float: right;
}
.fas {
  color: red;
}

label {
  color: rgb(119, 118, 118);
  display: inline-block;
  margin: 15px 15px 15px 0;
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: bold;
}

h5 {
  font-style: italic;
  font-size: 0.6em;
  color: #555;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="radio"] {
  display: inline-block;
  width: 16px;
  margin: 0 2px 0 5px;
  position: relative;
  top: 2px;
}
.assist {
  font-size: 0.7em;
  font-style: italic;
}
.submit {
  display: inline-block;
  background: #0a70bc;
  color: #fff;
  margin: 15px auto;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
}

.submit:hover {
  background: #2c3e50;
}

.pill {
  display: block;
  margin: 5px 0 0 0;
  padding: 12px 12px;
  background: #eee;
  border-radius: 5px;
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.err {
  margin: 3px auto;
  color: red;
  font-size: 0.7em;
}
</style>
