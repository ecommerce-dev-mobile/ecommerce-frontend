<script setup>
import { ref } from 'vue'

import DropDownComponent from './DropDown.vue'
import logoURL from '@/assets/logo-piston-shop.png'

const isMenuActive = ref(false)
const isLoginVisible = ref(false)
const isContactVisible = ref(false)

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

function showLoginModal() {
  isLoginVisible.value = !isLoginVisible.value
}


</script>

<template>

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
      <li class="nav-item" @click="showContactModal"><router-link to="/">Contact</router-link></li>
    </ul>
    <div class="end-bar">
      <i class="fa-solid fa-bag-shopping"></i>
      <i class="fa-regular fa-heart"></i>
      <div class="login-button" @click="showLoginModal"><p>Sign up</p></div>
    </div>


    <div class="hamburguer" @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </div>


    <div class="sidebar" :class="{ active: isMenuActive }">
  <div class="close-btn" @click="toggleMenu">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul>
    <li><router-link to="#products-section">Cars</router-link></li>
    <li><router-link to="/">About us</router-link></li>
    <li><router-link to="/">Contact</router-link></li>
    <li><button class="login-lateral"><router-link to="/">Sign up</router-link>
    </button></li>


  </ul>
</div>
  </nav>
  <div v-if="isLoginVisible" class="login-modal">
  <div class="login-content">
    <span class="close" @click="showLoginModal">&times;</span>
    <h2 style="margin-bottom: 30px;">LOGIN</h2>

    <input type="name" placeholder="Nome:">
    <input type="email" placeholder="Email">
    <input type="passworld" placeholder="Senha:">
    <button class="btn-log" @click="showLoginModal">LOGAR</button>
  </div>
</div>



</template>

<style scoped>


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
  width: 100px;
  margin-right: 30px;
}

.fa-bars {
  font-size: 25px;
  margin-top: 10px;
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

@media (min-width: 1151px) {
  .fa-bars {
    display: none;
  }

  .sidebar {
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
  border-radius: 30px;
  font-size: 25px;
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

.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5rem;
  border-radius: 10px;
  min-width: 500px;
  max-width: 90%;
  text-align: center;
  position: relative;
  animation: slideUp 0.5s ease-out;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
}

input {
  background-color: rgb(216, 216, 216);
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.mensagem {
  background-color: rgb(216, 216, 216);
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  height: 150px;
}



.btn-log {
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  transition: 0.3s;
}

.btn-log:hover {
  background-color: rgb(68, 68, 68);
}

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
