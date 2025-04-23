<script setup>
import { ref } from 'vue'

import DropDownComponent from './DropDown.vue'
import logoURL from '@/assets/logo-piston-shop.png'

const isMenuActive = ref(false)

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

</script>

<template>
  <header>
    <nav>
    <div class="home-button">
      <router-link to="/"><img class="logo-image" :src="logoURL" alt="" /></router-link>
    </div>
    <ul class="ul-bar">
      <li class="nav-item">
        <DropDownComponent class="dropdown-menu" />
      </li>
      <li class="nav-item"><router-link to="/">Cars</router-link></li>
      <li class="nav-item"><router-link to="/">About us</router-link></li>
      <li class="nav-item"><router-link to="/">Contact</router-link></li>
    </ul>
    <div class="end-bar">
      <i class="fa-solid fa-bag-shopping"></i>
      <i class="fa-regular fa-heart"></i>
      <div class="login-button"><p>Sign up</p></div>
    </div>


    <div class="hamburguer" @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </div>


    <div class="sidebar" :class="{ active: isMenuActive }">
  <div class="close-btn" @click="toggleMenu">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul>
    <li><router-link to="/">Cars</router-link></li>
    <li><router-link to="/">About us</router-link></li>
    <li><router-link to="/">Contact</router-link></li>
    <li><button class="login-lateral"><router-link to="/">Sign up</router-link>
    </button></li>


  </ul>
</div>
  </nav>
  </header>
</template>

<style scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
}

nav {
  display: flex;
  align-items: center;
  align-items: start;
  justify-content: space-between;
  margin: 1rem 3rem 1rem 3rem;
  gap: 3rem;

}

nav > ul {
  display: flex;
  justify-content: start;
  list-style: none;
  width: 100%;
  margin-top: 1.5rem;
  gap: 3rem;
}
.nav-item {
  border: 2px solid transparent;
  padding: 0.5rem;
  cursor: pointer;
  transition: 100ms all;
  display: flex;
  align-items: center;
  position: relative;

}
a {
  text-decoration: none;
  color: black;
}
.end-bar {
  width: 30%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

i {
  font-size: 1.3rem;
  transition: 0.2s;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
}

i:hover {
  background-color: rgb(226, 223, 223);
}
.home-button {
  padding: 0;
}

.logo-image {
  width: 110px;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2.5px;
  width: 0%;
  background-color: black;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 48px;
  border: 1px solid #ffff;
  background-color: black;
  color: #fff;
  border-radius: 25rem;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 200ms all;
}

.login-button:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}

.login-button p {
  width: fit-content;
}

@media (max-width: 1150px) {
  .ul-bar{
    display: none;
  }

  .end-bar {
    display: none;
  }

}

@media (min-width: 1150px) {
  .fa-bars {
    display: none;

  }
}

.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 999;
}

.sidebar.active {
  right: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

.close-btn {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.close-btn i {
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-btn i:hover {
  background-color: rgb(226, 223, 223);
}

.login-lateral {
  background-color: rgb(223, 223, 223);
  border-radius: 25rem;
  border: none;
  padding: 5px;
  width: 150px;
  transition: 0.3s;
}

.login-lateral:hover {
  background-color: rgb(189, 189, 189);

}
</style>
