<script setup>
import { categories } from '@/constants/categories.js'
import { useCarStore } from '@/stores/cars'

const carStore = useCarStore()

const handleCategory = (category) => {
  carStore.selectedCategory = category
}
</script>

<template>
  <div class="container">
    <div class="filters">
      <a @click="handleCategory('')">Products</a>
      <ul>
        <li v-for="category in categories" :key="category.id" @click="handleCategory(category.id)">
          {{ category.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
p {
  font-size: 14px;
  width: fit-content;
}
a {
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
}
li {
  font-size: 14px;
  border: 2px solid transparent;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  position: relative;
}
li::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: black;
  transition: width 0.4s ease;
}

li:hover::after {
  width: 80%;
}
</style>
