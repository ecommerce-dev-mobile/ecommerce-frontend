<script setup>
import ProductComponent from '@/components/ProductComponent.vue'
import { useCarStore } from '@/stores/racingCar'

const carStore = useCarStore()
</script>

<template>
  <div class="products-container">
    <ProductComponent v-for="car in carStore.cars" :key="car.id" :product="car" />
  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
