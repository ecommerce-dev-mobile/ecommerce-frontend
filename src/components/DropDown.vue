<template>
  <Dropdown
    class="dropdown"
    v-model="selectedItem"
    :options="options"
    optionLabel="label"
    placeholder="Shop"
  >
    <template #option="slotProps">
      <div class="option">{{ slotProps.option.name }}</div>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from 'primevue/dropdown'

const options = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]
</script>

<style scoped>
.dropdown {
  display: flex;
  gap: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: 300ms all;
}
.option {
  padding: 0.5rem;
  border-radius: 12px;
  transition: 300ms all;
}
.option:hover {
  background-color: rgb(243, 243, 243);
}
</style>
