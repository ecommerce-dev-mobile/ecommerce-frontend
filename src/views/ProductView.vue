<script setup>
import { ref, computed } from 'vue'
import { useGetDiscountedPrice } from '../composables/useGetDiscountedPrice.js'
import { useFormatPrice } from '../composables/useFormatPrice.js'
import { useCarStore } from '@/stores/cars.js'
import { useRoute } from 'vue-router'

defineProps({
  product: Object,
})
const { getDiscountedPrice } = useGetDiscountedPrice()
const { formatPrice } = useFormatPrice()

const router = useRoute()
const carStore = useCarStore()
const counter = ref(0)

const addToCounter = () => {
  counter.value++
}

const removeFromCounter = () => {
  if (counter.value > 0) {
    counter.value--
  }
}

const product = computed(() => {
  return carStore.cars.find(product => product.id == router.params.id)
})
</script>

<template>
  <div v-if="product" class="container">
    <div class="image-container">
      <img :src="product.imageURL" alt="" />
    </div>
    <div class="infos-container">
      <h1>{{ product.name }}</h1>
      <p class="category">{{ product.category }}</p>
      <div class="price-wrapper">
        <p class="discounted-price">{{ getDiscountedPrice(product.price) }}</p>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
      </div>
      <div class="size-selector">
        <p>Size</p>
        <div class="size-list">
          <label class="radio-button">
            <input type="radio" name="opcao" value="1" />
            <span>L</span>
          </label>
          <label class="radio-button">
            <input type="radio" name="opcao" value="1" />
            <span>S</span>
          </label>
          <label class="radio-button">
            <input type="radio" name="opcao" value="1" />
            <span>XS</span>
          </label>
        </div>
      </div>
      <div class="purchase-finishing">
        <div class="quantity-selector">
          <i class="minus-btn fa-solid fa-minus" @click="removeFromCounter"></i>
          <input type="number" readonly v-model="counter" />
          <i class="fa-solid fa-plus" @click="addToCounter"></i>
        </div>
        <div class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i> Add to bag</div>
        <div class="favorite"><i class="fa-regular fa-heart"></i></div>
      </div>
    </div>
    <div class="description"></div>
  </div>
  <div v-else>Produto não encontrado</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  margin: 5rem 5rem 10rem 5rem;

}

.image-container {
  object-fit: contain;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 5rem;

}
.image-container img {
  width: 600px;
}
.infos-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h1 {
  font-weight: 400;
}
.price-wrapper {
  display: flex;
  gap: 1rem;
}
.price-wrapper p {
  font-size: 1.2rem;
}
.product-price {
  color: rgb(153, 153, 153);
  text-decoration: line-through;
}
.category {
  color: #828282;
}
.size-selector {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 2rem 0;
}
.size-selector p {
  color: #828282;
}
.size-list {
  gap: 1rem;
  display: flex;
  flex-direction: row;
}
.radio-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #e9e9e9;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.radio-button input {
  opacity: 0;
  position: absolute;
  inset: 0;
  cursor: pointer;
  margin: 0;
}

.radio-button input:checked + span {
  background-color: #908c87;
  color: white;
  border-color: #e9e9e9;
}

.radio-button span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.purchase-finishing {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}
.quantity-selector {
  background-color: #e9e9e9;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: fit-content;
}
.quantity-selector i {
  cursor: pointer;
}
.minus-btn {
  padding-right: 1rem;
}
.quantity-selector input {
  width: fit-content;
  max-width: 50px;
  border: none;
  outline: none;
  text-align: center;
  background-color: #e9e9e9;
}
.add-to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #e9e9e9;
  padding: 1rem;
  border-radius: 1rem;
  width: 200px;
  cursor: pointer;
  transition: all 200ms;
}
.add-to-cart:hover, label:hover {
  background-color: #bcbcbc;
}
.favorite {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms;
}
.favorite i {
  font-size: 1.5rem;
}
.favorite:hover {
  background-color: #bcbcbc;
}
@media (max-width: 1300px) {
  .container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 3rem;
  margin: 5rem 5rem 10rem 5rem;
}
</style>