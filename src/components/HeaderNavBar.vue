<template>
	<header
		class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5] h-[64px] max-h-[64px]"
	>
		<div class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4">
			<div>
				<a
					aria-current="page"
					href="/"
					class="router-link-active router-link-exact-active font-bold text-lg text-primary-500 flex items-center"
				>
					<img src="/logo.svg" class="w-14" />
					<span class="capitalize">Reach Booster</span>
				</a>
			</div>
			<div class="flex space-x-4 items-center divide-x divide-gray-500">
				<div class="flex space-x-4 text-sm items-center">
					<router-link to="/posts" class="text-gray-700 dark:text-gray-300">Posts</router-link>
					<div>
						<!-- <button
							class="flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100"
							@click="toggleDropdown"
						>
							<span>Documentations</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="img"
								class="ml-1"
								width="1em"
								height="1em"
								viewBox="0 0 32 32"
								fill="currentColor"
							>
								<path d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
							</svg>
						</button> -->
						<div
							v-if="isOpen"
							class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-slate-900"
						>
							<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
									role="menuitem"
								>
									Account settings
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
									role="menuitem"
								>
									Support
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
									role="menuitem"
								>
									License
								</a>
								<form method="POST" action="#">
									<button
										type="submit"
										class="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
										role="menuitem"
									>
										Sign out
									</button>
								</form>
							</div>
						</div>
					</div>
					<!-- <router-link
						to="/setting"
						class="cursor-pointer border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-white bg-primary-500 hover:bg-primary-400 border-primary-500 h-6 px-3 text-xs rounded"
					>
						Setting
					</router-link> -->
				</div>
				<div class="pl-4 flex space-x-3 text-xl">
					<div class="flex items-center">
						<div class="relative flex items-center">
							<label for="theme-switch" class="sr-only">Theme</label>
							<button id="theme-switch" @click="toggleTheme()">
								<a
									class="transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline dark:text-gray-400 text-gray-600"
									href="#"
								>
									<span v-if="!isDark" class="flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path
												d="m5.64 17-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5 5.51 5.51 0 0 0-5.5-5.5m0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5"
											/>
										</svg>
									</span>
									<span v-else class="justify-center items-center hidden dark:flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path
												d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05m-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32Z"
											/>
										</svg>
									</span>
								</a>
							</button>
						</div>
					</div>
					<a
						class="transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline dark:text-gray-400 text-gray-600"
						href="https://github.com/viandwi24/nuxt3-awesome-starter"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";

const isDark = useDark();
const toggleTheme = useToggle(isDark);

const isOpen = ref(false);

// Function to toggle dropdown state
const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

// Function to close dropdown with a slight delay
const closeDropdown = () => {
	setTimeout(() => {
		isOpen.value = false;
	}, 200);
};
</script>
