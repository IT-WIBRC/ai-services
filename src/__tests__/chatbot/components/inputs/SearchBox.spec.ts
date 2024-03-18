import { describe, expect, it } from "vitest";
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
    expect(searchBoxWrapper.find("input").attributes().placeholder).toBe(
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

  it("should emit the value when we click on the 'RoundedCursorIcon' and reset it", async () => {
    const typedText = "What is the role of the programming language ?";
    await searchBoxWrapper.find("input").setValue(typedText);
    expect(searchBoxWrapper.find("input").element.value).toBe(typedText);
    await searchBoxWrapper.findComponent(RoundedCursorIcon).trigger("click");
    expect(searchBoxWrapper.emitted()).toHaveProperty("textToSearch", [
      [typedText],
    ]);

    expect(searchBoxWrapper.find("input").element.value).toBe("");
  });

  it("should emit the value when we type on `enter` and reset it", async () => {
    searchBoxWrapper = mount(SearchBox, {
      props: {
        placeholder,
      },
    });

    const typedText = "What is the role of the programming language ?";
    await searchBoxWrapper.find("input").setValue(typedText);
    expect(searchBoxWrapper.find("input").element.value).toBe(typedText);

    await searchBoxWrapper.find("input").trigger("keyup.enter");

    expect(searchBoxWrapper.emitted()).toHaveProperty("textToSearch", [
      [typedText],
    ]);
    expect(searchBoxWrapper.find("input").element.value).toBe("");
  });
});
