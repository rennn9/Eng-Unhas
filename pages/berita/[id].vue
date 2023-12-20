<script setup>
definePageMeta({
  layout: false,
});

const route = useRoute();

const { data: global } = await useFetch("http://localhost:8055/items/global");
const { data: pageData } = await useAsyncData("pageData", () =>
  $fetch("http://localhost:8055/items/news", {
    params: {
      filter: {
        id: {
          _eq: route.params.id,
        },
      },
    },
  })
);
</script>

<template>
  <div>
    <NuxtLayout name="layout" :page="pageData.data[0].title">
      <section class="mx-[273px] my-[50px]">
        <img
          :src="`http://localhost:8055/assets/${pageData.data[0].picture}`"
          alt=""
          class="w-[50%] mb-[30px]"
        />
        <div
          v-html="pageData.data[0].title"
          class="mb-[30px] font-bold text-xl"
        ></div>
        <div v-html="pageData.data[0].text_content" class="text-justify"></div>
      </section>
    </NuxtLayout>
  </div>
</template>
