<script setup lang="ts">
import FooterLayout from "./components/FooterLayout.vue";
import HeaderNavBar from "./components/HeaderNavBar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<!-- <font-awesome-icon :icon="['fas', 'coffee']" />
  <font-awesome-icon :icon="['fas', 'apple-alt']" /> -->
	<HeaderNavBar v-if="route.meta.layout !== 'auth'" />
	<router-view />
	<FooterLayout v-if="route.meta.layout !== 'auth'" />
</template>
<style>
@import "assets/scss/_variables.scss";
@import "assets/scss/app.scss";
</style>
