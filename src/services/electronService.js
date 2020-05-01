import { remote } from "electron";

const electronService = {
  closeApplication() {
    remote.app.quit();
  },
  hideCurrentWindow() {
    remote.getCurrentWindow().hide();
  }
};

export default electronService;
