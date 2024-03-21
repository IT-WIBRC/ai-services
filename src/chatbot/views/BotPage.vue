<template>
  <section class="h-screen flex flex-col mx-10 pb-4">
    <div class="space-y-5 scroll pl-2 pr-1.5 py-2">
      <div
        v-for="(search, index) in getUserSearches"
        :key="index"
        class="flex"
        :class="{ 'justify-end': search.author === 'SYSTEM' }"
      >
        <MessageCard v-bind="search" class="max-w-[75%] shadow-sm" />
      </div>
    </div>
    <SearchBox
      placeholder="Ask question to WibrBot"
      @textToSearch="makeSearch"
    />
  </section>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
import SearchBox from "@/chatbot/components/inputs/SearchBox.vue";
import MessageCard, {
  MESSAGE_THEME,
} from "@/chatbot/components/cards/MessageCard.vue";

type Search = {
  author: "USER" | "SYSTEM";
  message: string;
};

type DisplayedSearch = Search & {
  class: string;
  theme: keyof typeof MESSAGE_THEME;
};

const userSearches = reactive<Search[]>([
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver ",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
  {
    author: "USER",
    message: "lorem erveveververververver",
  },
  {
    author: "SYSTEM",
    message: "lorem erveveververververver",
  },
]);

const getUserSearches = computed<DisplayedSearch[]>(() => {
  return userSearches.map((userSearch) => {
    const isUser = userSearch.author === "USER";
    return {
      ...userSearch,
      theme: isUser ? "BLUE_300" : "BLUE_700",
      class: isUser
        ? "text-blue-700 shadow-blue-300"
        : "shadow-fuchsia-400 text-fuchsia-400",
    };
  });
});

const makeSearch = (textTyped: string): void => {
  userSearches.push({
    author: "USER",
    message: textTyped,
  });
};
</script>
<style scoped>
.card {
  @apply max-w-[85%];
}
</style>
