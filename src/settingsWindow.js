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

    if (process.env.WEBPACK_DEV_SERVER_URL) {
      window.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}settings.html`);
    } else {
      window.loadURL("app://./settings.html");
    }
  }

};

export default settingsWindow;
