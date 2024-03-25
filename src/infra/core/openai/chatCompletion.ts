import { Completion } from "openai/resources/completions.mjs";
import openaiSource from "./base";

const chatCompletion = async (messages: string[]): Promise<Completion> =>
  await openaiSource.completions.create(
    {
      model: "gpt-3.5-turbo-instruct",
      prompt: messages,
    },
    {
      maxRetries:
        parseInt(import.meta.env.VITE_COMPLETION_MAX_RETRY as string) ?? 5,
    }
  );
export default chatCompletion;
