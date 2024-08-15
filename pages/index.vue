<template>
  <div>
    <!-- <PreLoader /> -->
    <Header />
    <Hero />
    <SectionFavorite />
    <Hero2 />
    <ListProductList/>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "catalogue",
  meta: [
    { name: "description", content: "Products Catalogue Website." }
  ],
})
</script>
