
import {
  app, protocol, BrowserWindow, Tray
} from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import path from "path";

const isDevelopment = process.env.NODE_ENV !== "production";

let win;

protocol.registerSchemesAsPrivileged([{ scheme: "app", privileges: { secure: true, standard: true } }]);

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 500,
    x: 1920 - 300,
    y: 1080 - 540,
    resizable: false,
    movable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }
}

app.on("ready", async () => {
  const iconPath = path.join("src", "assets", "trayIcon.png");
  const tray = new Tray(iconPath);
  tray.setToolTip("tray-template");

  tray.on("click", () => {
    createWindow();
  });
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
