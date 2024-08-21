<template>
	<div class="flex w-full dark:bg-dark transition-colors duration-500 ease-in-out">
		<div class="relative mx-auto px-4 sm:px-6 lg:px-8 mb-10" v-if="isLoading">
			<div class="w-[60rem]">
				<el-skeleton :rows="20" animated />
			</div>
		</div>
		<div class="relative mx-auto px-4 sm:px-6 lg:px-8 mb-10" v-else>
			<div class="w-[60rem] border-2 border-dashed p-4 rounded-md">
				<div
					class="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
				>
					<div>
						<div class="flex justify-between items-center pt-5 pb-10">
							<h1 class="font-bold text-4xl">Portrait Photography In Early Days</h1>
							<span
								class="border dark:text-black dark:bg-slate-50 p-3 rounded-md flex items-center gap-x-2 font-bold"
							>
								<img :src="socialMediaIcon(post?.type)" class="w-10" />
								{{ post?.type }}
							</span>
						</div>
						<hr />
						<p class="text-base leading-8 my-5">
							{{ post?.text }}
						</p>
						<div class="flex justify-between items-center">
							<div>
								<el-rate v-model="post.rate" :colors="colors" size="large" disabled />
							</div>
							<span
								class="bg-primary-500 border-primary-500 text-white hover:bg-primary-400 p-4 rounded-md cursor-pointer flex items-center gap-x-2 relative"
								@click="copyToClipboard(post.text)"
							>
								<img src="/src/assets/icons/copy.png" />
								Copy Post

								<span
									v-if="showCopiedMessage"
									class="absolute bg-green-500 text-white px-2 py-1 rounded-md transform-translate-y-full opacity-100 transition-opacity duration-300"
									:class="{ 'opacity-0': !showCopiedMessage }"
									style="left: -73px"
									@transitionend="handleTransitionEnd"
								>
									Copied!
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
});
const socialMediaIcon = (type) => {
	if (!type) return;
	return type === "Facebook"
		? "/src/assets/icons/facebook.svg"
		: type === "Instagram"
		? "/src/assets/icons/instagram.svg"
		: type === "X"
		? "/src/assets/icons/twitterx1.svg"
		: type === "Linkedin"
		? "/src/assets/icons/linkedin.svg"
		: "";
};
const showCopiedMessage = ref(false);

const copyToClipboard = (text) => {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	showCopiedMessage.value = true;

	setTimeout(() => {
		showCopiedMessage.value = false;
	}, 1000);
};
const isLoading = ref(false);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
</script>
