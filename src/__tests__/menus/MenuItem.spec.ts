import MenuItem, { Menu } from "@/menus/MenuItem.vue";
import ChatbotIcon from "@/chatbot/assets/icons/ChatbotIcon.vue";
import { RouterLinkStub, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

const menu: Menu = {
  path: "chatbot",
  icon: "CHATBOT",
  isActive: false,
  label: "My chat",
};

describe("MenuItem", () => {
  const menuItemWrapper = mount(MenuItem, {
    props: {
      ...menu,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it("should render correctly", () => {
    expect(menuItemWrapper.exists()).toBe(true);
  });

  it("should have the awaited label", () => {
    expect(menuItemWrapper.text()).toBe(menu.label);
  });

  it("should render the awaited icon", () => {
    expect(menuItemWrapper.findComponent(ChatbotIcon).exists()).toBe(true);
  });

  it("should contain the awaited path", () => {
    const chatbotMenu = menuItemWrapper.findComponent(RouterLinkStub);
    expect(chatbotMenu.exists()).toBe(true);
    expect(chatbotMenu.props().to).toBe(menu.path);
  });

  it("should have the awaited design when it is not active", () => {
    const chatbotIcon = menuItemWrapper.findComponent(ChatbotIcon);
    expect(chatbotIcon.exists()).toBe(true);
    expect(chatbotIcon.attributes().class).toBe(
      "stroke-2 h-7 w-7 stroke-white"
    );
  });

  it("should have the awaited design when it is active", () => {
    const customMenuItemWrapper = mount(MenuItem, {
      props: {
        ...menu,
        isActive: true,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const chatbotIcon = customMenuItemWrapper.findComponent(ChatbotIcon);
    expect(chatbotIcon.exists()).toBe(true);
    expect(chatbotIcon.attributes().class).toBe(
      "stroke-2 h-7 w-7 stroke-[#949AE6]"
    );
  });
});
