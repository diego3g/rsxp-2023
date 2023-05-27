import { by, device, expect, element } from "detox";

describe("Ticket", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have text about buy ticket", async () => {
    const getText = await element(by.text("COMPRAR INGRESSO"));

    await device.takeScreenshot("snapshot-check-text-about-ticket");
    await expect(getText).toBeVisible();
  });
});
