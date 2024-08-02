<template>
    <div class="flex w-full pt-[64px] dark:bg-dark transition-colors duration-500 ease-in-out"
        style="min-height:var(--layout-page-content-min-height);">
        <div
            style="position: fixed; top: 0px; right: 0px; left: 0px; pointer-events: none; width: auto; height: 3px; opacity: 0; background: repeating-linear-gradient(to right, rgb(0, 220, 130) 0%, rgb(52, 205, 254) 50%, rgb(0, 71, 225) 100%); transform: scaleX(0); transform-origin: left center; transition: transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s; z-index: 999999;">
        </div>
        <div class="flex-1 py-4 max-w-screen-2xl w-full px-4 mx-auto flex ">
            <div class="pt-2 mb-6 flex-1 flex">
                <div class="flex-1 flex flex-col items-center justify-center ">

                    <h1 class="text-center mt-4">
                        <span v-for="(item, i) in leadingsText" :key="i" :style="`--content: '${item.text}'; --start-color: ${item.startColor
                            }; --end-color: ${item.endColor}; --color: ${isDark ? 'white' : 'colors.slate.800'}; --animation-name: anim-fg-${i + 1
                            }`"
                            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase">
                            <span class="animated-text-fg">{{ item.text }}</span>
                        </span>
                    </h1>
                    <div class="px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]">a starter template for Nuxt 3 with
                        minimalist themes design, built in components, drawer &amp; menus, and more.
                    </div>

                    <div class="flex justify-center md:justify-start space-x-4 ml-2 mt-8">
                        <router-link to="/generate-post"
                            class="awesome-button bg-primary-500 border-primary-500 text-white hover:bg-primary-400">
                            generate post
                        </router-link>

                        <a href="https://github.com/viandwi24/nuxt3-awesome-starter" rel="noopener noreferrer"
                            class="awesome-button bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:text-white dark:hover:bg-gray-700">
                            GitHub
                        </a>
                    </div>
                </div>
                <div class="top-0 left-0 absolute w-screen">
                    <div class="absolute right-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex">
                        <div class="flex-1 rounded-l-9xl bg-gradient-to-l from-blue-600/10"></div>
                    </div>
                    <div class="absolute left-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex">
                        <div class="flex-1 rounded-r-9xl bg-gradient-to-r from-green-600/10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core"
import { computed } from "vue"

const isDark = useDark();

const leadingsText = computed(() => [
    {
        text: 'linkedIn',
        startColor: '#007CF0',
        endColor: '#00DFD8',
        delay: 0,
    },
    {
        text: 'post',
        startColor: '#7928CA',
        endColor: '#FF0080',
        delay: 2,
    },
    {
        text: 'generator',
        startColor: '#FF4D4D',
        endColor: '#F9CB28',
        delay: 4,
    },
])
</script>
<style lang="scss">
:root {
    --padding: 0.05em;
}

@keyframes anim-fg-1 {

    0%,
    16.667%,
    100% {
        opacity: 1;
    }

    33.333%,
    83.333% {
        opacity: 0;
    }
}

@keyframes anim-fg-2 {

    0%,
    16.667%,
    66.667%,
    100% {
        opacity: 0;
    }

    33.333%,
    50% {
        opacity: 1;
    }
}

@keyframes anim-fg-3 {

    0%,
    50%,
    100% {
        opacity: 0;
    }

    66.667%,
    83.333% {
        opacity: 1;
    }
}

.animated-text-bg {
    position: relative;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    content: var(--content);
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: var(--padding);
    padding-right: var(--padding);

    &:before {
        content: var(--content);
        position: absolute;
        display: block;
        width: 100%;
        color: var(--color);
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }
}

.animated-text-fg {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: var(--padding);
    padding-right: var(--padding);
    background-image: linear-gradient(90deg,
            var(--start-color),
            var(--end-color));
    position: relative;
    opacity: 0;
    z-index: 1;
    animation: var(--animation-name) 8s infinite;
}

.awesome-button {
    @apply cursor-pointer border transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center h-14 px-8 text-lg rounded-lg font-extrabold;
}
</style>