<script setup>
defineProps({
    product: Object
})
</script>

<template>
    <div class="product-card">
        <img class="product-image" :src="product.imageURL" alt="">
        <p class="product-title">{{ product.name }}</p>
        <p class="product-category">{{ product.category }}</p>
        <p class="product-price">{{ product.price.toFixed(2).replace('.',',') }}</p>
    </div>
</template>

<style scoped>
.product-card {
    display: flex;
    flex-direction: column;
}
</style>