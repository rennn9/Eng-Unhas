<script setup>
definePageMeta({
  layout: false,
});

const route = useRoute();

const { data: global } = await useFetch("http://localhost:8055/items/global");
const { data: pageData } = await useAsyncData("pageData", () =>
  $fetch("http://localhost:8055/items/pages", {
    params: {
      filter: {
        slug: {
          _eq: route.params.slug,
        },
      },
    },
  })
);
</script>

<template>
  <div>
    <NuxtLayout name="layout" :page="pageData.data[0].title">
      <section
        class="mx-[273px] my-[50px]"
        v-html="pageData.data[0].content"
      ></section>
    </NuxtLayout>
  </div>
</template>
