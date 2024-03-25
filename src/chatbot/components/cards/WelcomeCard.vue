<template>
  <div
    class="grid grid-cols-12 p-6 gap-x-4 text-white bg-black-750 rounded-2xl"
  >
    <div class="col-span-1">
      <LogoIcon class="inlibe h-10 w-10" />
    </div>
    <div class="col-span-11 space-y-4">
      <h2 data-test="title" class="text-3.5xl leading-10 font-medium">
        Hello! I am <span class="text-gradient">WibrBot</span>
      </h2>
      <h4 data-test="description" class="text-sm">
        What can i do to help you ?
      </h4>
      <div data-test="time" class="text-xs text-white/65">
        {{ getCurrentTime() }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import { CustomDate } from "@/chatbot/utils/date";

const getCurrentTime = (): string => {
  return CustomDate.getCurrentDateTime({
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>
