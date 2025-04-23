<script setup>
import ProductComponent from '@/components/ProductComponent.vue'
import { useRacingCarStore } from '@/stores/racingCar'

const racingCarStore = useRacingCarStore()
</script>

<template>
  <div class="products-container">
    <ProductComponent v-for="car in racingCarStore.racingCars" :key="car.id" :product="car" />
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
