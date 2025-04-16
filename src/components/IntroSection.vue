<script setup>
import carImageURL from '@/assets/mcqueen.png'
</script>

<template>
  <main>
    <div class="intro-container">
      <h1 class="intro-title">Welcome to Piston Shop</h1>
      <div class="description-text">
        <p class="intro-description">
          Welcome to Piston Shop, the best Cars shopping e-commerce. Warm up your engines, prepare
          to our trip and go explore our services.
        </p>
      </div>
      <button class="explore-button">Explore Now</button>
    </div>
    <div class="image-container">
      <img :src="carImageURL" alt="" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  gap: 6rem;
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

.intro-description {
  width: 650px;
  font-size: 13pt;
  animation: slideUp 2.5s ease-out;
}

.intro-title {
  font-size: 3.5rem;
  animation: slideUp 2s ease-out;

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
  width: fit-content;
  padding-top: 4rem;
}
.image-container > img {
  width: 540px;
}


/*ANIMAÇÃO*/

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}



</style>
