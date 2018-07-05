<template>
  <div class="habbo-client-error enable-flashplayer">
      <div class="client-error">
          <h1>Server Offline</h1>
          <p>The backend server is currently offline.<br><br>This page <b>will automatically</b> reload when it comes back online.</p>
          <p>Heroic {{ version.frontend }} by <a href="http://lechris.codes">LeChris</a></p>
      </div>
  </div>
</template>

<style scoped>
b {
  color: red;
}
</style>

<script>
import { HTTP } from "@/app/utilities/http";
export default {
  data: function() {
    return {
      timer: "",
      version: this.$heroic
    };
  },
  created: function() {
    this.timer = setInterval(this.check, 5000);
  },
  methods: {
    check: function() {
      HTTP.get("system/cms").then(() => {
        if (this.$sess) {
          this.$router.push("/me");
        } else {
          this.$router.push("/login");
        }
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
