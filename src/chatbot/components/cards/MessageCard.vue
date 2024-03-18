<template>
  <div
    :class="[`rounded-lg shadow-sm py-2 px-3 ${getTheme}`]"
    data-test="message-container"
  >
    <div class="text-xs" data-test="author">
      {{ StringUtils.capitalize(author) }}
    </div>
    <div class="text-white text-sm" data-test="message" v-text="message"></div>
  </div>
</template>
<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
import { StringUtils } from "../../utils/string";

export enum MESSAGE_THEME {
  BLUE_300 = "blue-300",
  BLUE_700 = "blue-700",
}

export default defineComponent({
  name: "MessageCard",
  props: {
    author: {
      type: String,
      required: true,
    },
    theme: {
      type: String as PropType<keyof typeof MESSAGE_THEME>,
      default: MESSAGE_THEME.BLUE_300,
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const getTheme = computed((): string => {
      return `bg-${MESSAGE_THEME[props.theme]}`;
    });

    return {
      StringUtils,
      MESSAGE_THEME,
      getTheme,
    };
  },
});
</script>
