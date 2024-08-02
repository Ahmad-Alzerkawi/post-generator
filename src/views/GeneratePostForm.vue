<template>
    <div class="flex w-full pt-[64px] dark:bg-dark transition-colors duration-500 ease-in-out"
        style="min-height:var(--layout-page-content-min-height);">
        <div class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-lg mt-20 pb-32">
            <div class="card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white dark:bg-gray-950 border
                border-gray-950/10 dark:border-gray-50/[0.2] mb-6">
                <div class="card-content px-6 py-6 relative" style="width: 400px;">
                    <div class="mb-4">
                        <div class="flex justify-between items-center font-semibold mb-2 dark:text-white">
                            <p>
                                Generate Post From
                            </p>
                        </div>
                        <el-radio-group v-model="formType" size="large">
                            <el-radio-button label="Youtube Link" value="youtubeLink" />
                            <el-radio-button label="Upload Video" value="videoUpload" />
                        </el-radio-group>
                    </div>

                    <Form :validation-schema="validationSchema" @submit="handleSubmit" v-slot="{ values }">
                        <pre class="dark:text-white">
                            {{ values }}
                        </pre>
                        <template v-if="formType === 'youtubeLink'">
                            <span class="font-semibold dark:text-white">
                                Youtube Link <span class="text-red-600">*</span>
                            </span>
                            <Field name="link" class="duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border 
                                rounded-r border-gray-900/10 dark:border-gray-50/[0.2] dark:focus:border-white focus:border-gray-900 
                                px-4 py-2 text-base dark:text-white text-black mt-2 mb-4" />
                        </template>
                        <div>
                            <VideoUploader v-if="formType === 'videoUpload'" />
                        </div>
                        <div class="flex justify-end mt-4">
                            <button
                                class="border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-
                                focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold
                                text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 
                                dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white h-9 px-4 text-sm rounded capitalize">
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import { ref } from 'vue';
import * as Yup from "yup";
import { useDark } from '@vueuse/core';
import VideoUploader from '../components/inputs/VideoUploader.vue';

const isDark = useDark()
const validationSchema = Yup.object({
    link: Yup.string().required("fieldRequired"),
})

const formType = ref('youtubeLink')
function handleSubmit(values: any) {
    console.log(values)
}

</script>

<style>
/* html[class='dark'] .el-input__wrapper {
    background-color: #0f172a;
}

html[class='dark'] .el-input__wrapper.is-focus {
    --el-input-border-color: rgb(59 166 118) !important;
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset !important;
}

html[class='dark'] .el-input {
    --el-input-text-color: white;
} */

.el-radio-button.is-active .el-radio-button__original-radio:not(:disabled)+.el-radio-button__inner {
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
</style>