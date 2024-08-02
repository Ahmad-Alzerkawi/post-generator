<script setup lang="ts">
import FooterLayout from './components/FooterLayout.vue';
import HeaderNavBar from './components/HeaderNavBar.vue';

</script>

<template>

  <!-- <font-awesome-icon :icon="['fas', 'coffee']" />
  <font-awesome-icon :icon="['fas', 'apple-alt']" /> -->
  <HeaderNavBar />
  <router-view />
  <FooterLayout />
</template>
<style>
@import 'assets/scss/_variables.scss';
@import 'assets/scss/app.scss';
</style>
