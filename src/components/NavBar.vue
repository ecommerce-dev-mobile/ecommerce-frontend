<script setup>
import DropDownComponent from './DropDown.vue';

</script>

<template>
  <nav>
    <ul>
      <li class="home-button">Home</li>
      <li>
        <DropDownComponent class="dropdown-menu" />
      </li>
      <li class="about-us">About us</li>
      <li class="contact">Contact</li>
    </ul>
    <div class="login-button">Login</div>
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
  padding: .5rem;
  cursor: pointer;
  transition: 100ms all;
}
li:hover {
  border-bottom: 3px solid black;
}
</style>
