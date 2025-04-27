<script setup></script>

<template>
  <div class="route-path">
    <h1><router-link to="/">Homepage</router-link> / Products</h1>
  </div>
</template>

<style scoped>
.route-path {
    display: flex;
    flex-direction: row;
}
h1, a {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    text-decoration: none;
}
</style>
