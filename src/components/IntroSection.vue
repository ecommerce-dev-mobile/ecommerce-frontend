<script setup></script>

<template>
  <div class="intro-container">
    <h1 class="intro-title">Welcome to Our Website</h1>
    <p class="intro-description">
      We are glad to have you here. Explore our features and services.
    </p>
    <button class="explore-button">Explore Now</button>
  </div>
</template>

<style scoped>
.intro-container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 6rem;
    gap: 1rem;
}
.intro-title {
font-size: 3rem;
}
.explore-button {
    background-color: transparent;
    border: 1px solid black;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 1rem;
}
</style>
