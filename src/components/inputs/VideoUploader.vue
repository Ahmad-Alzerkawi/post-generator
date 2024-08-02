<template>
    <Field name="video" v-slot="{ value, handleChange }">
        <el-upload drag class="w-100" action="#" :show-file-list="false" :auto-upload="false"
            :accept="AcceptedVideoExtensions" @update:file-list="(v) => handleChange(v[v.length - 1].raw)">

            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
            </template>
            <template v-if="!value">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
            </template>
            <div v-else class="d-flex align-items-center justify-content-center video_container">
                <video class="w-full h-40" controls>
                    <source :src="getUrl(value)" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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
import { Field } from 'vee-validate';
import { ElUpload, ElIcon } from 'element-plus';
import { Plus, UploadFilled, Delete } from '@element-plus/icons-vue';

const AcceptedVideoExtensions = 'video/webm, video/x-matroska, video/x-flv, video/x-ms-vob, video/ogg, video/avi, video/mp2t, video/mp4, video/3gpp';


function getUrl(file) {
    return URL.createObjectURL(file);
}

function beforeVideoUpload(file) {
    const isVideo = file.type.startsWith('video/');
    if (!isVideo) {
        this.$message.error('You can only upload video files!');
        return false;
    }
    return true;
}

function handleVideoChange(event, handleChange) {
    if (event.length > 0) {
        handleChange(event[event.length - 1].raw);
    }
}
</script>

<style scoped>
.video_container {
    position: relative;
}
.el-upload{
    width: 500px !important;
}
</style>