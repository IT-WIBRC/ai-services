<template>
  <label class="relative block">
    <span class="absolute inset-y-0 left-4 flex items-center">
      <SmileIcon class="w-7 h-7" />
    </span>
    <textarea
      type="search"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="typedText"
      @keyup.enter="emitTextToSearch"
      class="input-search"
    ></textarea>
    <span class="absolute inset-y-0 right-0 pr-1.5 flex items-center">
      <RoundedCursorIcon
        class="h-8 w-12 cursor-pointer"
        @click.stop="emitTextToSearch"
      />
    </span>
  </label>
</template>
<script setup lang="ts">
import SmileIcon from "@/chatbot/assets/icons/SmileIcon.vue";
import RoundedCursorIcon from "@/chatbot/assets/icons/RoundedCursorIcon.vue";
import { ref } from "vue";

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "textToSearch", textToSearch: string): void;
}>();

const typedText = ref<string>("");
const emitTextToSearch = (): void => {
  if (!typedText.value) return;
  emit("textToSearch", typedText.value);
  typedText.value = "";
};
</script>
<style scoped>
.input-search {
  @apply font-normal text-base bg-transparent w-full h-full border-2 border-[#5F5F5F] text-white resize-none;

  @apply rounded-xl py-4 px-14 outline-none placeholder:text-[#787676] transition duration-150;

  @apply overflow-y-auto overflow-x-hidden scroll;
}

.input-search:focus {
  @apply outline-none border-cyan-550 ring-1 ring-cyan-550;
}
</style>
