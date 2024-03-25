import { Completion } from "openai/resources/index.mjs";

export class MessageCompletion {
  private completion: Completion | undefined;

  get id() {
    return this.completion?.id;
  }

  get created() {
    return this.completion?.created;
  }

  get choices() {
    return this.completion?.choices;
  }
}
