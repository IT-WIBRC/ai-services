import { createMemoryHistory, createRouter } from "vue-router";
import PageLayout from "@/layouts/PageLayout.vue";

const routes = [
  {
    path: "/",
    component: PageLayout,
    children: [
      {
        path: "",
        name: "chatbot",
        component: () => import("@/chatbot/views/BotPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
