<template>
	<div
		class="flex w-full pt-[64px] dark:bg-dark transition-colors duration-500 ease-in-out"
		style="min-height: var(--layout-page-content-min-height)"
	>
		<div class="relative mx-auto px-4 sm:px-6 lg:px-8 mt-20 pb-32">
			<div
				class="card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white dark:bg-gray-950 border border-gray-950/10 dark:border-gray-50/[0.2] mb-6"
			>
				<div class="card-content px-6 py-6 relative" style="width: 500px">
					<div class="mb-4">
						<div class="flex justify-between items-center font-semibold mb-2 dark:text-white">
							<p>Generate Post From</p>
						</div>
						<el-radio-group v-model="formType" size="large">
							<el-radio-button label="Youtube Link" value="youtubeLink" />
							<el-radio-button label="Upload Video" value="videoUpload" />
							<el-radio-button label="Audio Video" value="audioUpload" />
						</el-radio-group>
					</div>

					<Form :validation-schema="validationSchema" @submit="handleSubmit">
						<template v-if="formType === 'youtubeLink'">
							<span class="font-semibold dark:text-white">
								Youtube Link <span class="text-red-600">*</span>
							</span>
							<Field
								name="link"
								class="duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border rounded-r border-gray-900/10 dark:border-gray-50/[0.2] dark:focus:border-white focus:border-gray-900 px-4 py-2 text-base dark:text-white text-black mt-2 mb-4"
							/>
						</template>
						<div v-if="formType === 'videoUpload'">
							<VideoUploader />
						</div>
						<div v-if="formType === 'audioUpload'">
							<AudioUploader />
						</div>

						<div class="font-semibold my-2">
							<div>Social Media Platform <span class="text-red-600">*</span></div>
							<div class="">
								<ElSelectField
									name="platform"
									defaultOption="Select Point Of View"
									size="large"
									clearable
									multiple
									:options="platformData?.map(b => ({label:b.key!,value:b.value!})) || []"
									:filterable="true"
								/>
							</div>
						</div>
						<div class="font-semibold my-4 flex justify-between items-center">
							<div>Number Of Posts To Generate <span class="text-red-600">*</span></div>
							<div>
								<Field name="PostNumber" v-slot="{ value, handleChange }">
									<el-input-number
										:model-value="value"
										@update:model-value="handleChange"
										:min="1"
										:max="4"
										controls-position="right"
									/>
								</Field>
							</div>
						</div>
						<el-collapse accordion>
							<el-collapse-item name="1">
								<template #title> <span class="text-sm font-bold">Advanced Options</span></template>
								<div class="w-full">
									<div class="flex justify-between items-center">
										<div>Point Of View</div>
										<div class="w-1/2">
											<ElSelectField
												name="pointOfView"
												defaultOption="Select Point Of View"
												size="large"
												clearable
												:options="pointOfViewData?.map(b => ({label:b.key!,value:b.value!})) || []"
												:filterable="true"
											/>
										</div>
									</div>
									<div class="flex justify-between items-center my-2">
										<div>Primary Key Phrase</div>
										<div class="w-1/2">
											<Field
												name="primaryKeyPhrase"
												class="duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border rounded-r border-gray-900/10 dark:border-gray-50/[0.2] dark:focus:border-white focus:border-gray-900 px-4 py-2 text-base dark:text-white text-black my-2"
											/>
										</div>
									</div>
									<div class="flex justify-between items-center mb-2">
										<div>Post Format</div>
										<div class="w-1/2">
											<ElSelectField
												name="PostFormat"
												defaultOption="Select Point Of View"
												size="large"
												clearable
												:options="postFormatData?.map(b => ({label:b.key!,value:b.value!})) || []"
												:filterable="true"
											/>
										</div>
									</div>
									<div class="flex justify-between items-center my-4">
										<div>Post Words Count</div>
										<div class="w-1/2 flex justify-end items-center custom-number">
											<Field name="WordCount" v-slot="{ value, handleChange }">
												<el-input-number
													:model-value="value"
													size="large"
													@update:model-value="handleChange"
													:min="700"
													:max="1500"
													controls-position="right"
												/>
											</Field>
										</div>
									</div>
									<div class="flex justify-between items-center mt-2">
										<div>Use Emojis</div>
										<div class="w-1/2 flex justify-end">
											<Field name="UseEmojis" v-slot="{ value, handleChange }">
												<el-switch
													:model-value="value"
													@update:model-value="handleChange"
													class="ml-2"
													style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
												/>
											</Field>
										</div>
									</div>

									<div class="mt-2">
										<div>Additional Prompt</div>
										<div class="">
											<Field v-slot="{ value, handleChange }" name="AdditionalPrompt">
												<el-input
													:model-value="value"
													@update:model-value="handleChange"
													class="w-100"
													v-bind="{ type: 'textarea', rows: '3' }"
												/>
											</Field>
										</div>
									</div>
								</div>
							</el-collapse-item>
						</el-collapse>
						<div class="flex justify-end mt-4">
							<button
								type="submit"
								class="border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray- focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white h-9 px-4 text-sm rounded capitalize"
							>
								Submit
							</button>
						</div>
					</Form>
				</div>
			</div>
			<div class="flex justify-center">
				<!-- <el-icon class="is-loading" :size="60">
					<Loading />
				</el-icon> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Form, Field } from "vee-validate";
import { computed, ref } from "vue";
import * as Yup from "yup";
import VideoUploader from "../components/inputs/VideoUploader.vue";
import AudioUploader from "../components/inputs/AudioUploader.vue";
import axios from "axios";
import { ElIcon } from "element-plus";
import { Loading } from "@element-plus/icons-vue";
import ElSelectField from "../components/inputs/ElSelectField.vue";

const validationSchema = computed(() => {
	return Yup.object(
		formType.value === "youtubeLink"
			? { link: Yup.string().url("Invalid URL").required("This field is required") }
			: { video: Yup.mixed().required("File is required") }
	);
});

const formType = ref("youtubeLink");
function handleSubmit(values: any) {
	console.log(values);
}

const pointOfViewData = [
	{ key: "Auto", value: 1 },
	{ key: "First Person Singular", value: 2 },
	{ key: "First Person Plural", value: 3 },
	{ key: "Second Person", value: 4 },
	{ key: "Third Person", value: 5 },
];

const postFormatData = [
	{ key: "Auto", value: 1 },
	{ key: "Summary", value: 2 },
	{ key: "Interview", value: 3 },
	{ key: "Listicle", value: 4 },
	{ key: "ProductReview", value: 5 },
	{ key: "NewsReport", value: 6 },
	{ key: "Tutorial", value: 7 },
];

const platformData = [
	{ key: "Blog", value: "Blog" },
	{ key: "LinkedIn", value: "LinkedIn" },
	{ key: "FaceBook", value: "FaceBook" },
	{ key: "Twitter", value: "X" },
];
const products = ref();

axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
	products.value = response.data;
});
</script>

<style>
.el-radio-button.is-active .el-radio-button__original-radio:not(:disabled) + .el-radio-button__inner {
	--el-radio-button-checked-bg-color: #3ba676;
	--el-color-primary: green;
	background-color: var(--el-radio-button-checked-bg-color, var(--el-color-primary));
	border-color: var(--el-radio-button-checked-border-color, var(--el-color-primary));
	border-color: var(--el-radio-button-checked-bg-color, var(--el-color-primary));
}

.el-radio-button {
	--el-radio-button-checked-bg-color: #3ba676;
	--el-radio-button-checked-border-color: var(--el-radio-button-checked-bg-color);
}

.el-radio-button__inner:hover {
	--el-radio-button-checked-bg-color: #3ba676;
	color: var(--el-radio-button-checked-bg-color);
}
.custom-number .el-input-number {
	width: 100%;
}
</style>
