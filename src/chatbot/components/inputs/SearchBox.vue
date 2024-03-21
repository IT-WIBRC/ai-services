<template>
  <label class="relative block" ref="label">
    <span class="absolute inset-y-0 left-4 flex items-center">
      <SmileIcon class="w-7 h-7" />
    </span>
    <textarea
      :placeholder="placeholder"
      autocomplete="off"
      v-model="typedText"
      @keyup.enter="emitTextToSearch"
      @keyup="textAreaAdjust()"
      class="input-search"
      ref="textArea"
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
import { onMounted, ref } from "vue";

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

let initialHeight = 0;
const label = ref<HTMLLabelElement>();
const textArea = ref<HTMLTextAreaElement>();
onMounted(() => {
  initialHeight = label.value?.offsetHeight ?? 0;
  if (textArea.value) textArea.value.style.height = `${initialHeight}px`;
});

const emit = defineEmits<{
  (e: "textToSearch", textToSearch: string): void;
}>();

const makeAdjustment = (height: number): void => {
  if (label.value && textArea.value) {
    label.value.style.height = `${height}px`;
    textArea.value.style.height = `${height}px`;
  }
};

const textAreaAdjust = (): void => {
  if (!textArea.value) return;

  const scrollHeight = textArea.value.scrollHeight;
  if (!textArea.value.value) {
    makeAdjustment(initialHeight);
    return;
  }

  makeAdjustment(scrollHeight > initialHeight ? scrollHeight : initialHeight);
};

const typedText = ref<string>("");
const emitTextToSearch = (): void => {
  if (!typedText.value) return;
  emit("textToSearch", typedText.value);
  typedText.value = "";
};
</script>
<style scoped>
.input-search {
  @apply font-normal text-base bg-transparent w-full border-2 border-[#5F5F5F] text-white resize-none;

  @apply rounded-xl py-4 px-14 outline-none placeholder:text-[#787676] transition duration-150 border overflow-hidden;
}

.input-search::-webkit-scrollbar {
  @apply w-0;
}

.input-search:focus {
  @apply outline-none border-cyan-550 ring-1 ring-cyan-550;
}
</style>
