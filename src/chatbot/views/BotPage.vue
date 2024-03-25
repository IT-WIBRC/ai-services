<template>
  <section class="h-screen flex flex-col mx-10 pb-4 scroll-smooth">
    <div
      class="h-full flex flex-col justify-end gap-y-5 scroll pl-2 pr-1.5 py-5"
    >
      <WelcomeCard class="w-full animate-welcome" />
      <TransitionGroup name="list">
        <div v-for="(search, index) in userSearches" :key="index">
          <MessageCard
            v-bind="search"
            :class="[
              'w-full',
              search.author === 'ME' ? 'bg-gray-550' : 'bg-black-750',
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
import { reactive } from "vue";
import SearchBox from "@/chatbot/components/inputs/SearchBox.vue";
import MessageCard, {
  AUTHOR,
} from "@/chatbot/components/cards/MessageCard.vue";
import WelcomeCard from "@/chatbot/components/cards/WelcomeCard.vue";

type Search = {
  author: AUTHOR;
  message: string;
};

const userSearches = reactive<Search[]>([]);

const makeSearch = (textTyped: string): void => {
  userSearches.push({
    author: "ME",
    message: textTyped,
  });
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
