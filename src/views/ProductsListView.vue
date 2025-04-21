<script setup>
import ProductComponent from '@/components/ProductComponent.vue'
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()
</script>

<template>
  <ProductComponent v-for="car in carStore.cars" :key="car.id" :product="car" />
</template>

<style scoped></style>
