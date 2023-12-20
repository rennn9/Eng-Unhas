<script setup>
const { data: informations } = await useFetch(
  "http://localhost:8055/items/informations",
  {
    query: {
      page: 1,
      limit: 4,
    },
  }
);
</script>

<template>
  <div id="informasi" class="relative flex-auto">
    <Banner title="Informasi"></Banner>

    <div v-for="item in informations.data" :key="item.id" class="max-w-md">
      <NuxtLink
        :to="`/informasi/${item.id}`"
        class="font-bold inline-block text-sm hover:text-[#eb2629]"
        >{{ item.title }}</NuxtLink
      >
      <p class="text-xs mb-[50px]">&#x1F4C5; {{ item.datetime_published }}</p>
    </div>

    <!-- <a class="absolute right-0 inline-block text-[#0000EE] mt-[30px]" href="#">Semua Informasi>></a> -->
    <div class="flex justify-end mt-[30px]">
      <a class="inline-block text-[#0000EE]" href="/informasi"
        >Semua Informasi>></a
      >
    </div>
  </div>
</template>

<style></style>
