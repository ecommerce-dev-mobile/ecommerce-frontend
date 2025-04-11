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
  padding: .5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: 300ms all;
}
li:hover {
  background-color: rgb(243, 243, 243);
}
</style>
