<template>
  <aside class="bg-black-800 px-10 py-6 space-y-14 sticky top-0">
    <div class="flex items-end gap-x-2">
      <LogoIcon class="inlibe h-9 w-9" />
      <span data-test="app-name" class="text-white text-2xl font-poppins">
        Wibrbot
      </span>
    </div>
    <nav>
      <ul class="grid gap-y-10">
        <MenuItem
          v-for="{ label, path, name, icon } in menus"
          :key="label"
          :icon="icon"
          :is-active="$route.name === name"
          :label="label"
          :path="path"
        ></MenuItem>
      </ul>
    </nav>
  </aside>
</template>
<script setup lang="ts">
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import MenuItem, { Menu } from "./MenuItem.vue";

type CustomMenu = Menu & {
  name: string;
};

const menus: CustomMenu[] = [
  {
    icon: "CHATBOT",
    label: "My chats",
    path: "/",
    name: "chatbot",
  },
];
</script>
