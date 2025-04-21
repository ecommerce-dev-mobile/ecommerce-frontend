<script setup>
import carImageURL from '/cars/mcqueen.png'
</script>

<template>
  <main>
    <div class="intro-container">
      <h1 class="intro-title">Welcome to Piston Shop</h1>
      <div class="description-text">
        <h2 class="mobile-description">The best Cars® shop.</h2>
        <p class="intro-description">
          The best Cars shopping e-commerce. Warm up your engines, prepare
          to our trip and go explore our services.
        </p>
      </div>
      <router-link to="/products" class="explore-button">Explore Now</router-link>
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
  font-size: 1rem;
  animation: slideUp 2.5s ease-out;
}

.mobile-description {
  display: none;
  font-weight: 500;
  animation: slideUp 2.5s ease-out;
}

.intro-title {
  font-size: 3rem;
  animation: slideUp 2s ease-out;
}
.explore-button {
  text-decoration: none;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 25rem;
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
  width: 100%;
  padding: 4rem 4rem 0 0;
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

@media (max-width: 1440px) {
  main {
    gap: 2rem;
  }
  .intro-container {
    padding-left: 4rem;
  }
  .image-container {
    padding-right: 4rem;
  }
  .image-container > img {
    width: 400px;
  }
}

@media (max-width: 1280px) {
  .intro-container {
    padding-left: 3rem;
    width: 600px;
  }
  .description-text {
    width: fit-content;
  }
  .intro-description {
    width: 550px;
  }
  .intro-title {
    font-size: 2.5rem;
  }
  .image-container {
    padding-right: 3rem;
  }
}

@media (max-width: 1110px) {
  .intro-container {
    width: 500px;
  }
  .description-text {
    width: 400px;
  }
  .intro-description {
    width: 400px;
    font-size: 1rem;
  }
  .image-container > img {
    width: 380px;
  }
}

@media (max-width: 960px) {
  main {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .intro-container {
    width: 100dvw;
    height: 50vh;
    align-items: center;
    padding: 0;
  }
  .description-text, .intro-description, .mobile-description {
    width: 550px;
    text-align: center;
  }
  .image-container {
    padding: 0;
    margin-bottom: 4rem;
  }
}

@media (max-width: 560px) {
  main {
    gap: 0;
  }
  .intro-container {
    height: 40dvh;
  }
  .intro-title {
    display: none;
  }
  .intro-description {
    display: none;
  }
  .mobile-description {
    display: block;
  }
  .image-container > img {
    width: 300px;
  }
}
</style>
