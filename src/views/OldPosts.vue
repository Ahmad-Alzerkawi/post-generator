<template>
	<div class="dark:bg-dark">
		<div class="mt-[100px]">
			<AudioPost v-for="post in fakePosts" :post="post" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import AudioPost from "../components/AudioPost.vue";

const fakePosts = [
	{
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		type: "audio",
		data: {
			id: 3,
			title: 'Jason Derulo - "What You Say"',
			sizeBytes: 28155549,
			link: "assets\\audios\\be6925b3-8c40-4c61-8ac4-74cecab66093.flac",
			youtubeLink: "",
			audioExtension: "flac",
			duration: 222,
			createdAt: "2024-08-20T10:50:14.9996864",
			updatedAt: "2024-08-20T10:50:14.9996864",
		},
	},
	{
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		type: "video",
		data: {
			id: 1,
			sizeBytes: 5147178,
			link: "assets\\videos\\6fabe639-920f-404e-92e6-35eba4f08daa.mkv",
			videoExtension: "mkv",
			image: "/accessibility.png",
			audio: {
				id: 7,
				title:
					'How to Create "Hormozi Style" Captions for Reels in 60 Seconds (Premiere Pro Quick Tutorial)',
				sizeBytes: 7540814,
				link: "assets\\audios\\6fabe639-920f-404e-92e6-35eba4f08daa.wav",
				youtubeLink: "https://www.youtube.com/watch?v=MYdKBuA3XF8",
				audioExtension: "wav",
				duration: 43,
				createdAt: "2024-08-20T14:20:02.6497233",
				updatedAt: "2024-08-20T14:20:02.6497234",
			},
			createdAt: "2024-08-20T14:20:02.6512471",
			updatedAt: "2024-08-20T14:20:02.6512473",
		},
	},
	{
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		type: "audio",
	},
	{
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		type: "video",
		data: {
			id: 2,
			sizeBytes: 5147178,
			link: "assets\\videos\\6fabe639-920f-404e-92e6-35eba4f08daa.mkv",
			videoExtension: "mkv",
			image: "/Designer.png",
			audio: {
				id: 7,
				title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
				sizeBytes: 7540814,
				link: "assets\\audios\\6fabe639-920f-404e-92e6-35eba4f08daa.wav",
				youtubeLink: "",
				audioExtension: "wav",
				duration: 43,
				createdAt: "2024-08-20T14:20:02.6497233",
				updatedAt: "2024-08-20T14:20:02.6497234",
			},
			createdAt: "2024-08-20T14:20:02.6512471",
			updatedAt: "2024-08-20T14:20:02.6512473",
		},
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
