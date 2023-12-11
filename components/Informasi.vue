<script>
export default {
  name: "Informasi",
};
</script>

<template>
  <div id="informasi" class="relative flex-auto">
    <div id="banner" class="relative w-auto bg-[#063D63]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
        >Informasi</span
      >
    </div>
    <div id="informasi-1" class="max-w-md">
      <span class="font-bold mt-[50px] inline-block text-sm"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        hic?</span
      >
      <p class="text-xs">&#x1F4C5; 23 September 2019</p>
    </div>
    <div id="informasi-1" class="max-w-md">
      <span class="font-bold mt-[50px] inline-block text-sm"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        hic?</span
      >
      <p class="text-xs">&#x1F4C5; 23 September 2019</p>
    </div>
    <div id="informasi-1" class="max-w-md">
      <span class="font-bold mt-[50px] inline-block text-sm"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        hic?</span
      >
      <p class="text-xs">&#x1F4C5; 23 September 2019</p>
    </div>
    <a class="absolute right-0 inline-block text-[#0000EE] mt-[30px]" href="#"
      >Semua Informasi>></a
    >
  </div>
</template>
<style></style>
-->

<script>
export default {
  name: "Informasi",
  data() {
    return {
      informationItems: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?",
          date: "23 September 2019",
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?",
          date: "24 September 2019",
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?",
          date: "22 September 2019",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="informasi" class="relative flex-auto">
    <div id="banner" class="relative w-auto bg-[#063D63]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
        >Informasi</span
      >
    </div>

    <div
      v-for="(item, index) in informationItems"
      :key="index"
      class="max-w-md"
    >
      <span class="font-bold mt-[50px] inline-block text-sm">{{
        item.title
      }}</span>
      <p class="text-xs">&#x1F4C5; {{ item.date }}</p>
    </div>

    <!-- <a class="absolute right-0 inline-block text-[#0000EE] mt-[30px]" href="#">Semua Informasi>></a> -->
    <div class="flex justify-end mt-[30px]">
      <a class="inline-block text-[#0000EE]" href="#">Semua Informasi>></a>
    </div>
  </div>
</template>

<style></style>
