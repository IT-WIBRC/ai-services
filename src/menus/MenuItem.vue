<template>
  <div class="flex items-center text-white gap-4">
    <component
      :is="MENU_ICON[icon]"
      :class="[
        'stroke-2 h-7 w-7',
        isActive ? 'stroke-[#949AE6]' : 'stroke-white',
      ]"
    />
    <RouterLink
      :class="['text-xl font-semibold', { 'text-[#949AE6]': isActive }]"
      :to="path"
    >
      {{ label }}
    </RouterLink>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import ChatBotIcon from "@/chatbot/assets/icons/ChatBotIcon.vue";

enum MENU_ICON {
  CHATBOT = "ChatBotIcon",
}

export type Menu = {
  path: string;
  icon: keyof typeof MENU_ICON;
  label: string;
};

export default defineComponent({
  name: "MenuItem",
  components: { ChatBotIcon },
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<keyof typeof MENU_ICON>,
      default: "CHATBOT",
    },
    path: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {
    return {
      MENU_ICON,
    };
  },
});
</script>
