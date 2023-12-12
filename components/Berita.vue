<script>
export default {
  name: "Berita",
  data() {
    return {
      newsItems: [
        {
          id: 1,
          imageSrc: "@/assets/img/berita-1.jpg",
          title: "Berita 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?",
        },
        {
          id: 2,
          imageSrc: "@/assets/img/berita-2.jpg",
          title: "Berita 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?",
        },
        {
          id: 3,
          imageSrc: "@/assets/img/berita-3.jpg",
          title: "Berita 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?",
        },
        {
          id: 4,
          imageSrc: "@/assets/img/berita-4.jpg",
          title: "Berita 4",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="berita" class="basis-9/12 md:mr-[26px] mr-[0px] relative">
    <!-- <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase">Berita</span>
    </div> -->
    <Banner></Banner>
    <div id="konten" class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-[3rem] relative">
      <div v-for="item in newsItems" :key="item.id" :id="'berita-' + item.id" class="">
        <img :src="item.imageSrc" alt="" />
        <span class="font-bold mt-[20px] inline-block text-sm md:text-xl">
          {{ item.title }}
        </span>
        <p>{{ item.content }}</p>
      </div>
    </div>

    <div class="flex justify-end mt-[30px]">
      <a class="inline-block text-[#0000EE]" href="#">Lihat berita nasional yang lain>></a>
    </div>
  </div>
</template>

<style></style>
