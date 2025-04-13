<script setup>
import DropDownComponent from './DropDown.vue'

import logoURL from '@/assets/piston-shop-logo.png'
</script>

<template>
  <nav>
    <ul>
      <li class="home-button">
        <router-link><img class="logo-image" :src="logoURL" alt="" /></router-link>
      </li>
      <li>
        <DropDownComponent class="dropdown-menu" />
      </li>
      <li class="about-us"><router-link>About us</router-link></li>
      <li class="contact"><router-link>Contact</router-link></li>
    </ul>
    <div class="login-button"><p>Sign up</p></div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 4rem 1rem 4rem;
}
nav > ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 40vw;
}
li {
  border: 3px solid transparent;
  padding: 0.5rem;
  cursor: pointer;
  transition: 100ms all;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
}
.home-button {
  padding: 0;
}
.home-button:hover {
  border: none;
}
.logo-image {
  width: 112px;
}
li:hover {
  border-bottom: 3px solid black;
}
.login-button {
  border: 1px solid #ffff;
  background-color: black;
  color: #fff;
  border-radius: 25px;
  padding: .5rem;
  font-weight: 500;
  cursor: pointer;
  transition: 200ms all;
}
.login-button:hover {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
</style>
