<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
    const {
      data: galleries,
      pending,
      error,
      refresh,
    } = await useFetch("http://localhost:8055/items/galleries");

    return {
      modules: [Autoplay, Pagination, Navigation],
      galleries,
    };
  },
};
</script>

<template>
  <div
    class="lg:mx-[273px] lg:my-[87px] md:mx-[100px] sm:mx-[50px] md:my-[57px] sm:my-[27px]"
  >
    <Banner title="Galeri"></Banner>
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
        <swiper-slide v-for="item in galleries.data" class="h-full">
          <div class="flex flex-col h-full">
            <img
              :src="`http://localhost:8055/assets/${item.picture}`"
              :alt="item.title"
              class=""
            />
            <p class="text-center font-bold">{{ item.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style></style>
