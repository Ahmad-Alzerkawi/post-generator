<template>
	<div class="dark:bg-dark">
		<div class="flex w-full dark:bg-dark transition-colors duration-500 ease-in-out">
			<div class="relative sm:px-6 lg:px-8 pt-[75px] w-[64rem] mx-auto p-4">
				<el-carousel indicator-position="outside" trigger="click" class="rounded-md">
					<el-carousel-item v-for="item in socialMediaStrategies" :key="item" class="rounded-md">
						<div class="px-8 flex items-center h-full text-2xl grid-cols -4">
							<div class="w-3/4">
								{{ item.info }}
							</div>
							<div class="w-1/4">
								<img :src="item.icon" class="w-full" />
							</div>
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>

		<div class="mt-[20px]">
			<PostCard v-for="post in fakePosts" :post="post" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import PostCard from "../components/PostCard.vue";

const socialMediaStrategies = [
	{
		info:
			"Leverage optimal timing: Analyze audience activity times on social media platforms and post content when engagement is highest.",
		icon: "/src/assets/icons/time.svg",
	},
	{
		info:
			"Engage with followers: Regularly respond to comments and messages, show interest in their opinions, and answer their questions.",
		icon: "/src/assets/icons/engage-with-followers.svg",
	},
	{
		info:
			"Collaborate with influencers: Partner with influential individuals to increase awareness and interaction on your page. Ask them to share or mention your content in their posts.",
		icon: "/src/assets/icons/influencers.svg",
	},
	{
		info:
			"Promote active participation: Encourage followers to comment and share their thoughts on specific topics. Pose open-ended questions or conduct polls to boost interaction.",
		icon: "/src/assets/icons/encourage-followers.svg",
	},
	{
		info:
			"Post multiple times daily: To enhance engagement, publish content consistently across platforms. On average, aim for 3-2 posts per day per platform based on audience interaction.",
		icon: "/src/assets/icons/post.svg",
	},
	{
		info: "Utilize visual content: Visual content is a key factor in capturing attention for your posts.",
		icon: "/src/assets/icons/visual-content.svg",
	},
];

const fakePosts = [
	{
		text:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		type: "Facebook",
		rate: 5,
	},
	{
		text:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		type: "X",
		rate: 4,
	},
	{
		text:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		type: "Linkedin",
		rate: 3,
	},
	{
		text:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		type: "Instagram",
		rate: 2,
	},
];
</script>
<style scoped>
.el-carousel__item h3 {
	display: flex;
	color: #475669;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item {
	background-color: rgb(84, 199, 148);
}
</style>
