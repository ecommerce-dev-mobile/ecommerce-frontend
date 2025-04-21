<script setup>
defineProps({
  product: Object,
})

const getDiscountedPrice = (price) => {
  const discountedPrice = `R$ ${Math.round(price * 0.85)},49 no Pix`
  return discountedPrice
}

const formatPrice = (price) => {
  const newPrice = `R$ ${price.toFixed(2).replace('.', ',')}`
  return newPrice
}
</script>

<template>
  <div class="product-card">
    <img class="product-image" :src="product.imageURL" alt="" />
    <div class="product-info">
      <p class="product-title">{{ product.name }}</p>
      <p class="product-category">{{ product.category }}</p>
      <div class="price-wrapper">
        <p class="discounted-price">{{ getDiscountedPrice(product.price) }}</p>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  cursor: pointer;
}
.product-image {
  height: 300px;
  object-fit: contain;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 1rem;
  transition: 300ms all;
}
.product-image:hover {
    background-color: #bcbcbc;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 1rem;
  gap: 0.5rem;
}
.product-category {
  color: #828282;
}
.price-wrapper {
  display: flex;
  gap: 1rem;
}
.product-price {
  color: rgb(153, 153, 153);
  text-decoration: line-through;
}
</style>
