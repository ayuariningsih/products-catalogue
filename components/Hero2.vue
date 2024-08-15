<template>
  <div class="section hero">
    <img
      data-src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3840/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png"
      data-srcset="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3840/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 3840w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3584/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 3584w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3328/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 3328w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3072/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 3072w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_2816/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 2816w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_2560/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 2560w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_2304/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 2304w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_2048/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 2048w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1792/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 1792w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1536/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 1536w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1280/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 1280w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1024/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 1024w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_768/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 768w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_512/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 512w,//cdn.allbirds.com/image/upload/f_auto,q_auto,w_256/cms/aRrRXJBq2zOpYND3fcrMY/4753492c20bf9adea2e391f10072bbf3/22Q2-Rosie-HP-Desktop.png 256w"
      data-sizes="auto" alt="hero image" role="presentation"
      class="jsx-1566996889 ImageV2 ImageV2--object-fit-cover HeroSlide__background-image lazyautosizes Lazy--loaded"
      sizes="978px" src="~/assets/images/hero-2.png" />
    <div class="hero-content">
      <div class="content">
        <h2>We Make Better Things In A Better Way</h2>
        <div>
          <p>
            By looking to the world's greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you
            feel
            good in and feel good about.
          </p>
        </div>
        <div class="content__logo">
          <h3>catalogue</h3>
          <p>by nature</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  height: 40vh;
  z-index: 1;

  img {
    position: absolute;
    z-index: -1;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  .hero-content {
    /* float: left;
    position: absolute; */
    z-index: 3;
    /* margin-top: 15em; */
    color: white !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;

    .content {
      width: 100%;

      h2 {
        margin-bottom: 1.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 700 !important;
      }

      div {
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;

        p {
          font-weight: 400;
          line-height: 1.5;
          font-size: 16px;
          letter-spacing: 0.5px;
          margin: 0px 0px 18px;
          padding: 0px;
          text-align: center;
        }
      }

      .content__logo {
        text-align: center;
        margin-top: 2.5rem;

        h3 {
          font-family: 'Pacifico';
          font-size: 2rem !important;
          font-weight: 400 !important;
        }

        p {
          font-size: 0.75rem !important;
          font-weight: 400;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      }

      @media (min-width: 992px) {
        h2 {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        p {
          font-size: 1.125rem !important;
          line-height: 1.75rem !important;
        }
      }
    }
  }
}

.hero::before {
  content: " ";
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(24, 24, 24, 0.5);
  z-index: 2;
}</style>