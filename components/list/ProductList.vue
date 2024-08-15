<template>
  <div class="product-list">
    <section class="newArrivals paddingSame">
      <div class="product-list__header">
        <h3>MORE TO SHOP</h3>
      </div>
      <div class="secondCardWrapper">
        <ProductCard v-for="(product, index) in paginatedProducts" :key="index" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';

const products = ref([
  {
    image: 'shoes-1.png',
    name: "Women's Tree Dasher 2",
    color: 'Blizzard',
    price: 135,
  },
  {
    image: 'shoes-5.png',
    name: "Women's Tree Pipers",
    color: 'Kaikoura White',
    price: 105,
  },
  {
    image: 'shoes-3.png',
    name: "Women's Wool Runner 2",
    color: 'Natural Black',
    price: 110,
  },
  {
    image: 'shoes-4.png',
    name: "Women's Tree Runner Go",
    color: 'Blizzard',
    price: 120,
  },
]);

const itemsPerPage = ref(4);
const currentPage = ref(1);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return products.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage.value);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/global.module.scss';

.product-list {
  padding: 2rem;
  max-width: 100%;

  &__header {
    text-align: left;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;

  &__button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover:not(:disabled) {
      color: #333;
    }
  }
}
</style>
