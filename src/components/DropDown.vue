<template>
  <Dropdown
    class="dropdown"
    v-model="selectedItem"
    :options="options"
    optionLabel="label"
    placeholder="Shop"
  >
    <template #option="slotProps">
      <router-link :to="slotProps.option.link" class="option">{{ slotProps.option.name }}</router-link>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from 'primevue/dropdown'

const options = [{ name: 'Option 1', link: '/' }, { name: 'Option 2', link: '/' }, { name: 'Option 3', link: '/' }]
</script>

<style scoped>
.dropdown {
  display: flex;
  gap: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: 300ms all;
  box-shadow: none !important;
  border: none;
  outline: none;
}
::v-deep(.p-dropdown-label.p-placeholder) {
  color: black !important;
}
::v-deep(.p-dropdown-trigger) {
  color: black;
}
.option {
  padding: 0.5rem;
  transition: 100ms all;
  color: black;
  text-decoration: none;
}
</style>
