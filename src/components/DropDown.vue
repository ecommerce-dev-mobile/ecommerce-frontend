<script setup>
import Dropdown from 'primevue/dropdown'
import { useCarStore } from '@/stores/cars'

const carStore = useCarStore()

const options = [
  { name: 'Racing cars', category: 'racing' },
  { name: 'Classics', category: 'classics' },
  { name: 'Support cars', category: 'support' },
]

const handleCategory = (category) => {
  carStore.selectedCategory = category
}
</script>

<template>
  <Dropdown class="dropdown" :options="options" optionLabel="label" placeholder="Shop">
    <template #option="slotProps">
      <a class="option" @click="handleCategory(slotProps.option.category)"
        ><router-link to="#products-section">{{ slotProps.option.name }}</router-link></a
      >
    </template>
  </Dropdown>
</template>

<style scoped>
.dropdown {
  display: flex;
  cursor: pointer;
  transition: 300ms all;
  box-shadow: none !important;
  border: none;
  outline: none;
  gap: 0.5rem;
}
::v-deep(.p-dropdown-label.p-placeholder) {
  color: black !important;
}
::v-deep(.p-dropdown-trigger) {
  width: fit-content !important;
  color: black;
}
.option {
  padding: 0.5rem;
  transition: 100ms all;
  color: black;
  text-decoration: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>
