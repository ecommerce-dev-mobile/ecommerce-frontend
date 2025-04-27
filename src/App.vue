<script setup>
import NavComponent from '@/components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <header>
    <NavComponent />
  </header>
  <RouterView />
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style scoped></style>
