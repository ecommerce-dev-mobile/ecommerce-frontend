<script setup></script>

<template>
  <nav>
    <ul>
      <li class="home-button">Home</li>
      <li>
        <select name="shop" class="shop">
          <option value="shop" disabled selected>Shop</option>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
        </select>
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
  margin: 1rem 6rem 1rem 6rem;
}
nav > ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 50vw;
}
nav > ul > li > select {
    border: none;
    background-color: transparent;
    font-size: 1rem;
}

select:focus {
    outline: none;   
}
</style>
