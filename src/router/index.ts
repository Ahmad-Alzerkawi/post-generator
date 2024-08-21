import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home-page",
			component: () => import("../components/TestBody.vue"),
		},
		{
			path: "/auth/:type",
			name: "register-page",
			component: () => import("../views/RegisterLogin.vue"),
			meta: { layout: "auth" },
		},
		{
			path: "/generate-post",
			name: "generate-post",
			component: () => import("../views/GeneratePostForm.vue"),
		},
		{
			path: "/generated-posts",
			name: "generated-posts",
			component: () => import("../views/GeneratedPosts.vue"),
		},
		{
			path: "/posts",
			name: "old-posts",
			component: () => import("../views/OldPosts.vue"),
		},
	],
});

export default router;
