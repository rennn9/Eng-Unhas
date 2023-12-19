import type { Navbar } from '#build/components';
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { createDirectus } from "@directus/sdk";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const client = createDirectus("http://directus.example.com");

export default {
  name: "Header",
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
  <div class=" flex flex-col">
    <Topbar></Topbar>
    <div
      class="bg-[#063d63] px-[23px] md:px-[43px] lg:px-[273px] pt-[20px] py-[25px] md:py-[0px] flex flex-col  justify-end"
    >
      <div class="flex items-center py-[0px] md:py-[20px]">
        <a id="logo" class="inline-block w-[800px]" href="#">
          <img src="@/assets/img/Logo_FTUH.png" alt="FTUH Logo" class="" />
        </a>
      </div>
      <Navbar class="w-full"></Navbar>
    </div>
    <!-- <div class="flex items-center justify-center mb-[45px] md:mb-[0px]">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper w-full"
      >
        <swiper-slide>
          <div class="relative pb-[43.25%]">
            <img
              src="@/assets/img/carousel-1.jpeg"
              alt="Gambar"
              class="object-center absolute top-0 left-0 w-full h-full"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative pb-[43.25%]">
            <img
              src="@/assets/img/carousel-2.jpeg"
              alt="Gambar"
              class="object-center absolute top-0 left-0 w-full h-full"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative pb-[43.25%]">
            <img
              src="@/assets/img/carousel-3.jpeg"
              alt="Gambar"
              class="object-center absolute top-0 left-0 w-full h-full"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative pb-[43.25%]">
            <img
              src="@/assets/img/carousel-4.jpeg"
              alt="Gambar"
              class="object-center absolute top-0 left-0 w-full h-full"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<style></style>