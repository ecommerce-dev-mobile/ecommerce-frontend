<script setup>
import DropDownComponent from './DropDown.vue'

import logoURL from '@/assets/logo-piston-shop.png'
</script>

<template>
  <nav>
    <div class="home-button">
      <router-link to="/"><img class="logo-image" :src="logoURL" alt="" /></router-link>
    </div>
    <ul>
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
  </nav>
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
  width: 150px;
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
</style>
