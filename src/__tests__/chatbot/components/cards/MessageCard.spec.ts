import MessageCard from "@/chatbot/components/cards/MessageCard.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

const messageCardProps = {
  author: "USER",
  message: "Lorem message",
  theme: "BLUE_300",
};

describe("MessageCard", () => {
  const messageCardWrapper = mount(MessageCard, {
    props: messageCardProps,
  });

  it("should render correctly", () => {
    expect(messageCardWrapper.exists()).toBe(true);
  });

  it("should display the awaited author", () => {
    expect(messageCardWrapper.find("[data-test='author']").text()).toBe("User");
  });

  it("should display the awaited message", () => {
    expect(messageCardWrapper.find("[data-test='message']").text()).toBe(
      messageCardProps.message
    );
  });

  it("should contain the awaited message theme", () => {
    expect(
      messageCardWrapper.find("[data-test='message-container']").attributes()
        .class
    ).toContain("blue-300");
  });
});
