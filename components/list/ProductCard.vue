<template>
  <div class="product-card">
    <div class="imageWrapper">
      <img :src="product.image" :alt="product.name" class="product-card__image" />
    </div>
    <div class="container">
      <h3 class="container__name">{{ product.name }}</h3>
      <p class="container__color">{{ product.color }}</p>
      <p class="container__price">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object as PropType<{
      image: string;
      name: string;
      color: string;
      price: number;
    }>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.product-card {
  text-align: center;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.245);
  }

  .imageWrapper {
    background-color: #eeeeee;
  }

  &__image {
    width: 100%;
    max-width: 300px;
    object-fit: cover;
    padding: 1rem;
  }
  .container {
    padding: 1rem;
    &__name {
      font-weight: bold;
      margin-top: 1rem;
    }
  
    &__color,
    &__price {
      margin-top: 0.5rem;
      color: #666;
    }
  }
}
</style>
