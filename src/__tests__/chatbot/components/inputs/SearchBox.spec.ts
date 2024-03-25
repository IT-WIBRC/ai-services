import { describe, expect, it, vi } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import SearchBox from "@/chatbot/components/inputs/SearchBox.vue";
import SmileIcon from "@/chatbot/assets/icons/SmileIcon.vue";
import RoundedCursorIcon from "@/chatbot/assets/icons/RoundedCursorIcon.vue";

const placeholder = "Type your research here ...";
describe("SearchBox", () => {
  let searchBoxWrapper: VueWrapper;
  searchBoxWrapper = mount(SearchBox, {
    props: {
      placeholder,
    },
  });

  it("should render correctly", () => {
    expect(searchBoxWrapper.exists()).toBe(true);
  });

  it("should have the awaited placeholder", () => {
    expect(searchBoxWrapper.find("textarea").attributes().placeholder).toBe(
      placeholder
    );
  });

  it("should contain the 'SmileIcon'", () => {
    expect(searchBoxWrapper.findComponent(SmileIcon).exists()).toBe(true);
  });

  it("should contain the 'RoundedCursorIcon'", () => {
    expect(searchBoxWrapper.findComponent(RoundedCursorIcon).exists()).toBe(
      true
    );
  });

  it("should be active when there we have typed a text", async () => {
    let roundedCursorIcon = searchBoxWrapper.findComponent(RoundedCursorIcon);
    expect(roundedCursorIcon.props().isActive).toBe(false);
    expect(roundedCursorIcon.attributes().class).toContain(
      "cursor-not-allowed"
    );

    await searchBoxWrapper.find("textarea").setValue("something");

    roundedCursorIcon = searchBoxWrapper.findComponent(RoundedCursorIcon);
    expect(roundedCursorIcon.props().isActive).toBe(true);
    expect(roundedCursorIcon.attributes().class).toContain("cursor-pointer");
  });

  it("should not emit anything when there is nothing", async () => {
    await searchBoxWrapper.find("textarea").setValue("");
    await searchBoxWrapper.findComponent(RoundedCursorIcon).trigger("click");

    expect(searchBoxWrapper.emitted()).not.toHaveProperty("textToSearch");
  });

  it("should emit the value when we click on the 'RoundedCursorIcon' and reset it", async () => {
    const typedText = "What is the role of the programming language ?";
    await searchBoxWrapper.find("textarea").setValue(typedText);
    expect(searchBoxWrapper.find("textarea").element.value).toBe(typedText);
    await searchBoxWrapper.findComponent(RoundedCursorIcon).trigger("click");
    expect(searchBoxWrapper.emitted()).toHaveProperty("textToSearch", [
      [typedText],
    ]);

    expect(searchBoxWrapper.find("textarea").element.value).toBe("");
  });

  it.skip("should emit the value when we type on `enter` and reset it", async () => {
    searchBoxWrapper = mount(SearchBox, {
      props: {
        placeholder,
      },
    });

    const typedText = "What is the role of the programming language ?";
    await searchBoxWrapper.find("textarea").setValue(typedText);
    expect(searchBoxWrapper.find("textarea").element.value).toBe(typedText);

    await searchBoxWrapper.find("textarea").trigger("keyup.enter");

    expect(searchBoxWrapper.emitted()).toHaveProperty("textToSearch", [
      [typedText],
    ]);
    expect(searchBoxWrapper.find("textarea").element.value).toBe("");
  });

  it.todo("should resize with the content");
  it.todo("should take the initial size when the content is reset");
});
