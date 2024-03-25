import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import BotPage from "@/chatbot/views/BotPage.vue";
import WelcomeCard from "@/chatbot/components/cards/WelcomeCard.vue";
import MessageCard from "@/chatbot/components/cards/MessageCard.vue";
import SearchBox from "@/chatbot/components/inputs/SearchBox.vue";

describe("BotPage", () => {
  const botPageWrapper = mount(BotPage);

  it("should render correctly", () => {
    expect(botPageWrapper.exists()).toBe(true);
  });

  it("should render the welcome card", () => {
    expect(botPageWrapper.findComponent(WelcomeCard).exists()).toBe(true);
  });

  it("should render the search box component", () => {
    const searchBox = botPageWrapper.findComponent(SearchBox);
    expect(searchBox.exists()).toBe(true);
    expect(searchBox.props().placeholder).toBe("Ask question to WibrBot");
  });

  it("should add a message when we fill the search box and click on the search icon", async () => {
    let messageCards = botPageWrapper.findAllComponents(MessageCard);
    expect(messageCards.length).toBe(0);

    const researches = [
      "What is the perimeter of the square?",
      "other",
      "More",
    ];
    const searchBox = botPageWrapper.findComponent(SearchBox);
    for (const research of researches) {
      await searchBox.vm.$emit("textToSearch", research);
    }

    messageCards = botPageWrapper.findAllComponents(MessageCard);
    expect(messageCards.length).toBe(3);

    messageCards.forEach((messageCard, index) => {
      expect(messageCard.props().message).toBe(researches[index]);
      expect(messageCard.props().author).toBe("ME");
    });
  });
});
