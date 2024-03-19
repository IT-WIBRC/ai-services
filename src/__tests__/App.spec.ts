import App from "@/App.vue";
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

describe("App", () => {
  const appWrapper = mount(App, {
    global: { stubs: ["RouterView"] },
  });

  it("should render correclty", () => {
    expect(appWrapper.exists()).toBe(true);
  });

  it("should contain the RouterView", () => {
    expect(appWrapper.findComponent("router-view-stub").exists()).toBe(true);
  });
});
