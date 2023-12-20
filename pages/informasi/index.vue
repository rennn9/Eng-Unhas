<script setup>
definePageMeta({
  layout: false,
});
const pageNum = ref(1);

const { data: informations } = await useFetch(
  "http://localhost:8055/items/informations",
  {
    query: {
      page: pageNum,
      limit: 4,
    },
    watch: [pageNum],
  }
);

const route = useRoute();
</script>

<template>
  <div>
    <NuxtLayout name="layout" page="Informasi">
      <section class="flex flex-col items-center">
        <div id="informasi" class="mx-[273px] my-[50px]">
          <div
            v-for="item in informations.data"
            :key="item.id"
            class="max-w-md"
          >
            <NuxtLink
              :to="`/informasi/${item.id}`"
              class="font-bold inline-block text-sm hover:text-[#eb2629]"
              >{{ item.title }}</NuxtLink
            >
            <p class="text-xs mb-[50px]">
              &#x1F4C5; {{ item.datetime_published }}
            </p>
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
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
