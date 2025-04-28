<script setup>
import { ref, computed } from 'vue'
import ProductComponent from '@/components/ProductComponent.vue'
import { useCarStore } from '@/stores/cars'
import ProductFilter from '@/components/ProductFilter.vue'
import PagePath from '@/components/PagePath.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const carStore = useCarStore()

const filteredProducts = computed(() => {
  return carStore.selectedCategory
    ? carStore.cars.filter((product) => product.category === carStore.selectedCategory)
    : carStore.cars
})
const pushToRoute = (productId) => {
  router.push(`/product/${productId}`)
}
</script>

<template>
  <main>
    <div class="page-path" id="products-section">
      <PagePath />
    </div>
    <div class="products">
      <aside class="products-filter">
        <ProductFilter />
      </aside>
      <div class="products-container">
        <ProductComponent
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @click="pushToRoute(product.id)"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
.page-path {
  margin: 5rem 2rem 2rem 2rem;
}
.products {
  display: flex;
  flex-direction: row;
}
.products-filter {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: fit-content;
  margin: 0 2rem 0 2rem;
  text-decoration: none;
}
.products-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  padding-right: 1rem;
}
</style>
