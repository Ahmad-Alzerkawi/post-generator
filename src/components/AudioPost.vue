<template>
	<div class="flex w-full dark:bg-dark transition-colors duration-500 ease-in-out">
		<div class="relative mx-auto px-4 sm:px-6 lg:px-8 mb-10" v-if="isLoading">
			<div class="w-[60rem]">
				<el-skeleton :rows="4" animated />
			</div>
		</div>
		<div class="relative mx-auto px-4 sm:px-6 lg:px-8 mb-10" v-else>
			<div class="w-[60rem] border-2 border-dashed p-4 rounded-md">
				<div class="flex justify-end">
					<div class="flex gap-x-2">
						<span
							v-if="post?.type === 'video' && !post?.data?.audio?.youtubeLink"
							class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
						>
							Uploaded Video
						</span>
						<a
							v-if="post?.type === 'video' && !!post?.data?.audio?.youtubeLink"
							:href="post?.data?.audio?.youtubeLink"
							target="_blank"
							class="bg-red-200 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
						>
							Youtube Video
						</a>
						<span
							v-if="post?.type === 'audio'"
							class="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300"
						>
							Uploaded Audio
						</span>
					</div>
				</div>
				<div class="py-5">
					<div class="flex items-center">
						<div v-if="post?.type === 'video'">
							<img :src="post?.data?.image" class="w-24 me-4" />
						</div>
						<div>
							<div class="font-semibold text-xl">Title:</div>
							<h3 class="text-xl">{{ post?.title }}</h3>
						</div>
					</div>
				</div>
				<div class="flex justify-end gap-x-4 mt-4">
					<span
						class="bg-primary-500 border-primary-500 text-white hover:bg-primary-400 p-2 rounded-md cursor-pointer flex items-center gap-x-2 relative"
					>
						View Generated Posts
					</span>
					<span
						class="bg-red-600 border-red-600 text-white hover:bg-red-700 p-2 rounded-md cursor-pointer flex items-center gap-x-2 relative"
					>
						Delete
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
	isLoading: {
		type: Boolean,
	},
});
</script>
