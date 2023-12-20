<script setup>
definePageMeta({
  layout: false,
});
const pageNum = ref(1);

const { data: news } = await useFetch("http://localhost:8055/items/news", {
  query: {
    page: pageNum,
    limit: 4,
  },
  watch: [pageNum],
});

const route = useRoute();
</script>

<template>
  <div>
    <NuxtLayout name="layout" :page="'Berita'">
      <section
        class="mx-[273px] my-[50px] basis-9/12 relative flex flex-col items-center"
      >
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
              class="w-full h-[450px]"
            />
            <NuxtLink
              class="font-bold mt-[20px] inline-block text-sm md:text-xl text-justify mb-[20px] hover:text-[#eb2629]"
              :to="`/berita/${item.title}`"
            >
              {{ item.title }}
            </NuxtLink>
            <div v-html="item.text_content" class="line-clamp-3"></div>
          </div>
        </div>
        <div class="flex w-[30vw] justify-center gap-[30px]">
          <button
            @click="pageNum = pageNum > 2 ? pageNum-- : pageNum"
            class="w-[50px] h-[50px] bg-slate-500 text-white"
          >
            Prev
          </button>
          <button
            @click="pageNum = pageNum < 2 ? pageNum++ : pageNum"
            class="w-[50px] h-[50px] bg-slate-500 text-white"
          >
            Next
          </button>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
