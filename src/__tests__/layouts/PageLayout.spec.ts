import PageLayout from "@/layouts/PageLayout.vue";
import SideMenu from "@/menus/SideMenu.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("PageLayout", () => {
  const pageLayoutWrapper = shallowMount(PageLayout, {
    global: {
      stubs: ["RouterView"],
    },
  });

  it("should render correctly", () => {
    expect(pageLayoutWrapper.exists()).toBe(true);
  });

  it("should render the RouterView", () => {
    expect(pageLayoutWrapper.findComponent("router-view-stub").exists()).toBe(
      true
    );
  });

  it("should render the side menu component", () => {
    expect(pageLayoutWrapper.findComponent(SideMenu).exists()).toBe(true);
  });
});
