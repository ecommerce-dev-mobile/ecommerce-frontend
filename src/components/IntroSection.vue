<script setup>
import carImageURL from '@/assets/sally.png'
</script>

<template>
  <main>
    <div class="intro-container">
      <h1 class="intro-title">Welcome to Piston Shop</h1>
      <p class="intro-description">Warm up your engines and go explore our services.</p>
      <button class="explore-button">Explore Now</button>
    </div>
    <div class="image-container">
      <img :src="carImageURL" alt="">
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  /* padding-right: 8rem; */
}
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
  transition: 300ms all;
}
.explore-button:hover {
  background-color: black;
  color: white;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.image-container > img {
  width: 540px;
}
</style>
