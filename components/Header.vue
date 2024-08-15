<template>
  <header>
    <div class="fixed">
      <nav class="navbar">
        <i class="fa-solid fa-bars"></i>
        <ul class="navItemsContainer">
          <li class="navItems">Men</li>
          <li class="navItems">Women</li>
          <li class="navItems">Kids</li>
          <li class="navItems">Sale</li>
        </ul>

        <div class="logo">
          <h2 style="font-family: 'Pacifico';">catalogue</h2>
        </div>

        <ul class="navItemsContainerWrapper">
          <ul class="navItemsContainer">
            <li class="navItems">Sustainability</li>
            <li class="navItems">Rerun</li>
            <li class="navItems">Store</li>
          </ul>
          <ul class="navItemsContainer-icons">
            <i class="fa-solid fa-user"></i>
            <i class="fa-sharp fa-solid fa-circle-question"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </ul>
        </ul>

        <ul class="navItemsContainer-sm">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-search"></i>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/scss/global.module.scss';
</style>