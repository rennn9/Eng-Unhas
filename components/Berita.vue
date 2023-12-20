<script setup>
const { data: news } = await useFetch("http://localhost:8055/items/news", {
  query: {
    page: 1,
    limit: 4,
  },
});
</script>

<template>
  <div id="berita" class="basis-9/12 md:mr-[26px] mr-[0px] relative">
    <Banner title="Berita"></Banner>
    <div
      id="konten"
      class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-[3rem] relative"
    >
      <div
        v-for="item in news.data"
        :key="item.id"
        :id="'berita-' + item.id"
        class=""
      >
        <img
          :src="`http://localhost:8055/assets/${item.picture}`"
          alt=""
          class="w-full h-[310px]"
        />
        <NuxtLink
          class="font-bold mt-[20px] inline-block text-sm md:text-xl text-justify mb-[20px] hover:text-[#eb2629]"
          :to="`/berita/${item.id}`"
        >
          {{ item.title }}
        </NuxtLink>
        <div v-html="item.text_content" class="line-clamp-3"></div>
      </div>
    </div>

    <div class="flex justify-end mt-[30px]">
      <a class="inline-block text-[#0000EE]" href="/berita"
        >Lihat berita nasional yang lain>></a
      >
    </div>
  </div>
</template>

<style></style>
