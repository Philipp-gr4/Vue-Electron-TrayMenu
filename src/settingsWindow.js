const { remote } = require("electron");

const { BrowserWindow } = remote;

let window = null;

const settingsWindow = {
  createSettingsWindow() {
    window = new BrowserWindow({
      width: 800,
      height: 500,
      resizable: false,
      webPreferences: { webSecurity: false, nodeIntegration: true }
    });

    if (process.env.VUE_APP_DEV_URL) {
      window.loadURL(`${process.env.VUE_APP_DEV_URL}settings.html`);
    } else {
      window.loadURL("app://./settings.html");
    }
  }

};

export default settingsWindow;
