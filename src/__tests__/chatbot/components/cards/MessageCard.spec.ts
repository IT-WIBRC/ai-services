import MessageCard from "@/chatbot/components/cards/MessageCard.vue";
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

const messageCardProps = {
  author: "ME",
  message: "Lorem message",
};

describe("MessageCard", () => {
  const messageCardWrapper = mount(MessageCard, {
    props: messageCardProps,
  });

  it("should render correctly", () => {
    expect(messageCardWrapper.exists()).toBe(true);
  });

  it("should display the awaited author", async () => {
    expect(messageCardWrapper.find("[data-test='author']").text()).toBe("Me");
    expect(messageCardWrapper.findComponent(LogoIcon).exists()).toBe(false);

    await messageCardWrapper.setProps({
      ...messageCardProps,
      author: "SYSTEM",
    });

    expect(messageCardWrapper.findComponent(LogoIcon).exists()).toBe(true);
  });

  it("should display the awaited message", () => {
    expect(messageCardWrapper.find("[data-test='message']").text()).toBe(
      messageCardProps.message
    );
  });
});
