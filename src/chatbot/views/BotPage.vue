<template>
  <section class="h-screen flex flex-col mx-10 pb-4 scroll-smooth">
    <div
      class="h-full flex flex-col justify-end gap-y-5 scroll pl-2 pr-1.5 py-5"
    >
      <WelcomeCard class="w-full animate-welcome" />
      <TransitionGroup name="list">
        <div v-for="(search, index) in getUserChatCompletions" :key="index">
          <MessageCard
            v-bind="search"
            :class="[
              'w-full',
              search.author === 'SYSTEM' ? 'bg-black-750' : 'bg-gray-550',
            ]"
          />
        </div>
      </TransitionGroup>
    </div>
    <SearchBox
      placeholder="Ask question to WibrBot"
      @textToSearch="makeSearch"
      class="h-14 animate-search"
    />
  </section>
</template>
<script setup lang="ts">
import SearchBox from "@/chatbot/components/inputs/SearchBox.vue";
import MessageCard from "@/chatbot/components/cards/MessageCard.vue";
import WelcomeCard from "@/chatbot/components/cards/WelcomeCard.vue";
import { useChatbotStore } from "../../infra/store/chatBot";

const {
  getUserChatCompletions,
  sendUserMessageForCompletion,
  setUserChatCompletion,
} = useChatbotStore();

const makeSearch = async (textTyped: string): Promise<void> => {
  setUserChatCompletion(textTyped);
  await sendUserMessageForCompletion();
};
</script>
<style scoped>
.card {
  @apply max-w-[85%];
}

.animate-welcome {
  @apply opacity-0 transform scale-0;

  animation-name: bounce-welcome;
  animation-duration: 0.7s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes bounce-welcome {
  50% {
    @apply opacity-50;
  }

  100% {
    @apply opacity-100 scale-100;
  }
}

.animate-search {
  @apply transform scale-0 translate-y-12;

  animation-name: bounce-search;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes bounce-search {
  to {
    @apply scale-100 translate-y-0;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
