<template>
	<Field name="audio" v-slot="{ value, handleChange }">
		<el-upload
			drag
			class="w-100"
			action="#"
			:show-file-list="false"
			:auto-upload="false"
			:accept="AcceptedAudioExtensions"
			@update:file-list="(v) => handleChange(v[v.length - 1].raw)"
		>
			<template #tip>
				<div class="el-upload__tip">mp3/wav files with a size less than 10MB</div>
			</template>
			<template v-if="!value">
				<el-icon class="el-icon--upload"><upload-filled /></el-icon>
				<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
			</template>
			<div v-else class="d-flex align-items-center justify-content-center audio_container">
				<audio class="w-full" controls>
					<source :src="getUrl(value)" type="audio/mp3" />
					Your browser does not support the audio tag.
				</audio>
				<button @click.stop="handleChange(null)" class="mt-4">
					<el-icon color="#F56C6C" :size="20">
						<Delete />
					</el-icon>
				</button>
			</div>
		</el-upload>
	</Field>
</template>

<script setup>
import { Field } from "vee-validate";
import { ElUpload, ElIcon } from "element-plus";
import { UploadFilled, Delete } from "@element-plus/icons-vue";

const AcceptedAudioExtensions = "audio/mpeg, audio/wav, audio/ogg";

function getUrl(file) {
	return URL.createObjectURL(file);
}

function beforeAudioUpload(file) {
	const isAudio = file.type.startsWith("audio/");
	if (!isAudio) {
		this.$message.error("You can only upload audio files!");
		return false;
	}
	return true;
}

function handleAudioChange(event, handleChange) {
	if (event.length > 0) {
		handleChange(event[event.length - 1].raw);
	}
}
</script>

<style scoped>
.audio_container {
	position: relative;
}
.el-upload {
	width: 500px !important;
}
</style>
