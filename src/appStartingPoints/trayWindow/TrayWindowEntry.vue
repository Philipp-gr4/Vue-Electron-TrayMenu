<template>
  <div id="app">
    <div class="buttons">
      <FancyButton @click.native="closeApplication" :text="'Close Application'" />
      <FancyButton @click.native="openSettings" :text="'Settings'" />
    </div>
  </div>
</template>

<script>
import electronService from "../../services/electronService";
import settingsWindow from "../../settingsWindow";
import FancyButton from "../../components/a/FancyButton.vue";

export default {
  name: "App",
  components: {
    FancyButton
  },
  methods: {
    closeApplication() {
      electronService.closeApplication();
    },
    openSettings() {
      electronService.hideCurrentWindow();
      settingsWindow.createSettingsWindow();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
