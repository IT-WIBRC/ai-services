import OpenAI from "openai";

const openaiSource = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  organization: import.meta.env.VITE_ORGANIZATION_ID,
  dangerouslyAllowBrowser: ["development", "staging"].includes(
    import.meta.env.MODE
  ),
});

export default openaiSource;
