import { computed, reactive } from "vue";
import chatCompletion from "../core/openai/chatCompletion";

type MESSAGE_AUTHOR = "ME" | "SYSTEM";
export type DisplayableCompletion = {
  author: MESSAGE_AUTHOR;
  message: string;
};

export const useChatbotStore = () => {
  const userChatCompletions = reactive<DisplayableCompletion[]>([]);
  const getUserChatCompletions = computed<DisplayableCompletion[]>(
    () => userChatCompletions
  );

  const setUserChatCompletion = (message: string): void => {
    userChatCompletions.push({
      author: "ME",
      message,
    });
  };

  const sendUserMessageForCompletion = async () => {
    const userMessageCompletion = await chatCompletion(
      userChatCompletions.map(
        (userChatCompletion) => userChatCompletion.message
      )
    );
    console.log(userMessageCompletion);
    // userChatCompletions.push(userMessageCompletion?.choices[0].text);
  };

  return {
    getUserChatCompletions,
    setUserChatCompletion,
    sendUserMessageForCompletion,
  };
};
