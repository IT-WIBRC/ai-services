<template>
  <div class="rounded-2xl py-6 px-4 flex gap-x-6" data-test="message-container">
    <div>
      <LogoIcon v-if="author === 'SYSTEM'" class="inlibe h-8 w-8" />
      <span
        v-else
        class="text-xs text-white bg-cyan-400 p-2 rounded-lg inline-block font-bold"
        data-test="author"
      >
        {{ StringUtils.capitalize(author) }}
      </span>
    </div>
    <div
      class="text-white text-base"
      data-test="message"
      v-text="message"
    ></div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { StringUtils } from "@/chatbot/utils/string";
import LogoIcon from "@/assets/icons/LogoIcon.vue";

export type AUTHOR = "ME" | "SYSTEM";

export default defineComponent({
  name: "MessageCard",
  components: {
    LogoIcon,
  },
  props: {
    author: {
      type: String as PropType<AUTHOR>,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    return {
      StringUtils,
    };
  },
});
</script>
