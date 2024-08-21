<template>
	<section class="py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">Benefits</h2>
				<p class="mt-4 text-lg text-gray-500">Have videos? Why not repurpose them into amazing content?</p>
			</div>
			<div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="item in cardsInfo"
					class="p-6 text-gray-800 border-gray-200 dark:bg-gray-800 dark:border-gray-800 dark:text-white rounded-lg border-2"
				>
					<div class="flex items-center justify-center mb-4">
						<img :src="item.image" alt="Promote your channel" class="h-16 w-16" />
					</div>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">
						{{ item.title }}
					</h3>
					<p class="mt-2 text-gray-500 text-center">{{ item.info }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
const cardsInfo = [
	{
		title: "Promote your channel",
		info: "Use posts to promote your YouTube channel on your website, social media, email, and more.",
		image: "/video-marketing.png",
	},
	{
		title: "Increase your reach",
		info: "Reach those who would rather read than watch a video.",
		image: "/expanding.png",
	},
	{
		title: "Create backlinks",
		info: "Linking to your videos in your blogs creates backlinks which increases SEO.",
		image: "/backlink.png",
	},
	{
		title: "Save time and money",
		info: "Create blogs for a fraction of the time and cost of hiring a freelancer.",
		image: "/saving.png",
	},
	{
		title: "Increase accessibility",
		info: "Ensure your content can be enjoyed by everyone.",
		image: "/accessibility.png",
	},
	{
		title: "Expand your audience",
		info: "Reach those who would rather read than watch a video.",
		image: "/expanding.png",
	},
];
</script>
