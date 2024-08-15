<template>
  <section class="section two paddingSame">
    <div class="cardWrapper">
      <div class="container-image">
        <div class="videoPlayer">
          <div class="video" style="">
            <video src="~/assets/images/tree-glider-video.webm" preload="auto" autoplay loop playsinline
              webkit-playsinline x5-playsinline :style="(videoStyle as CSSProperties)">
            </video>
          </div>
          <div class="content">
            <h2 class="content__title">Tree Glider</h2>
            <p class="content__description">Sleek, Springy Athleisure Style</p>
            <div class="cta-link">
              <div class="cta-link__item">
                SHOP MEN
              </div>
              <div class="cta-link__item">
                SHOP WOMEN
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-image">
        <div class="videoPlayer">
          <div class="video">
            <img src="~/assets/images/tree-runner-image.avif" alt="Tree Runner" />
          </div>
          <div class="content">
            <h2 class="content__title">Tree Runner</h2>
            <p class="content__description">Breezy, Everyday Sneaker</p>
            <div class="cta-link">
              <div class="cta-link__item">
                SHOP MEN
              </div>
              <div class="cta-link__item">
                SHOP WOMEN
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-image">
        <div class="videoPlayer">
          <div class="video">
            <video src="~/assets/images/tree-runner-go-video.webm" preload="auto" autoplay loop playsinline
              webkit-playsinline x5-playsinline :style="(videoStyle as CSSProperties)">
            </video>
          </div>
          <div class="content">
            <h2 class="content__title">Tree Runner Go</h2>
            <p class="content__description">Airy, Packable, Travel Ready</p>
            <div class="cta-link">
              <div class="cta-link__item">
                SHOP MEN
              </div>
              <div class="cta-link__item">
                SHOP WOMEN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/global.module.scss';
@import '@/assets/scss/components/section-favorite.module.scss';
</style>