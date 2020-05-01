import { shallowMount } from "@vue/test-utils";
import electronService from "../../src/services/electronService";
import TrayWindowEntry from "../../src/appStartingPoints/trayWindow/TrayWindowEntry.vue";
import settingsWindow from "../../src/settingsWindow";

const wrapper = shallowMount(TrayWindowEntry);
const { vm } = wrapper;

describe("TrayWindowEntry", () => {
  describe("closeApplication", () => {
    it("should call closeApplication from Service", () => {
      electronService.closeApplication = jest.fn();

      vm.closeApplication();

      expect(electronService.closeApplication).toBeCalled();
    });
  });
  describe("openSettings", () => {
    it("should call hideCurrentWindow from Service and call createSettingsWindow", () => {
      electronService.hideCurrentWindow = jest.fn();
      settingsWindow.createSettingsWindow = jest.fn();

      vm.openSettings();

      expect(electronService.hideCurrentWindow).toBeCalled();
      expect(settingsWindow.createSettingsWindow).toBeCalled();
    });
  });
});
