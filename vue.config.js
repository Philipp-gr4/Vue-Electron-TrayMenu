module.exports = {
  pages: {
    index: {
      entry: "src/appStartingPoints/settingsWindow/main.js",
      filename: "settings.html",
      title: "Settings"
    },
    tray: {
      entry: "src/appStartingPoints/trayWindow/main.js",
      filename: "tray.html",
      title: "Tray"
    }
  }
};
