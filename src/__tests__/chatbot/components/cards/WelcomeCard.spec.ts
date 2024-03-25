import WelcomeCard from "@/chatbot/components/cards/WelcomeCard.vue";
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import { describe, it, expect, beforeAll, vi, afterAll } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";

describe("MessageCard", () => {
  let welcomeCardWrapper: VueWrapper;

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date("2020-04-12T00:35:00"));

    welcomeCardWrapper = mount(WelcomeCard);
  });

  afterAll(() => {
    vi.clearAllTimers();
  });

  it("should render correctly", () => {
    expect(welcomeCardWrapper.exists()).toBe(true);
  });

  it("should render the app icon", () => {
    expect(welcomeCardWrapper.findComponent(LogoIcon).exists()).toBe(true);
  });

  it("should have the awaited title", () => {
    expect(welcomeCardWrapper.find("[data-test='title']").text()).toBe(
      "Hello! I am WibrBot"
    );
  });

  it("should have the awaited description", () => {
    expect(welcomeCardWrapper.find("[data-test='description']").text()).toBe(
      "What can i do to help you ?"
    );
  });

  it("should have the current time in hour and minutes", () => {
    expect(welcomeCardWrapper.find("[data-test='time']").text()).toBe(
      "12:35 AM"
    );
  });
});
