<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  name: "Galeri",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<template>
  <div
    class="lg:mx-[273px] lg:my-[87px] md:mx-[100px] sm:mx-[50px] md:my-[57px] sm:my-[27px]"
  >

    <Banner></Banner>
    <div class="flex items-center justify-center">
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :spaceBetween="10"
        :slidesPerView="3"
        :loop="true"
        :modules="modules"
        class="mySwiper w-full"
      >
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-0.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-1.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-2.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box img-size">
            <img
              src="@/assets/img/galeri-3.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-4.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-6.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style></style>
