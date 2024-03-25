import SideMenu from "@/menus/SideMenu.vue";
import MenuItem from "@/menus/MenuItem.vue";
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import { describe, expect, it } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";

describe("SideMenu", () => {
  let sideMenuWrapper: VueWrapper;
  const mountSideMenu = (activeMenuName: string): void => {
    const mockRoute = {
      name: activeMenuName,
    };

    sideMenuWrapper = mount(SideMenu, {
      global: {
        stubs: ["RouterView", "RouterLink"],
        mocks: {
          $route: mockRoute,
        },
      },
    });
  };

  mountSideMenu("");

  it("should render correclty", () => {
    expect(sideMenuWrapper.exists()).toBe(true);
  });

  it("should render the logo icon", () => {
    expect(sideMenuWrapper.findComponent(LogoIcon).exists()).toBe(true);
  });

  it("should render the awaited app name", () => {
    expect(sideMenuWrapper.find("[data-test='app-name']").text()).toBe(
      "Wibrbot"
    );
  });

  it("should render the awaited menu items", () => {
    const menuItems = sideMenuWrapper.findAllComponents(MenuItem);
    expect(menuItems.length).toBe(1);
    [
      {
        icon: "CHATBOT",
        label: "My chats",
        path: "/",
        isActive: false,
      },
    ].forEach((menu, index) => {
      expect(menuItems[index].props()).toEqual(menu);
    });
  });

  it("should render the awaited menu item when it is active", () => {
    mountSideMenu("chatbot");

    const menuItems = sideMenuWrapper.findAllComponents(MenuItem);
    expect(menuItems.length).toBe(1);
    [
      {
        icon: "CHATBOT",
        label: "My chats",
        path: "/",
        isActive: true,
      },
    ].forEach((menu, index) => {
      expect(menuItems[index].props()).toEqual(menu);
    });
  });
});
