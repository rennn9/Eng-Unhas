<script setup>
definePageMeta({
  layout: false,
});

const { data: global } = await useFetch("http://localhost:8055/items/global");
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <section>
        <div
          id="informasi-dan-berita"
          class="flex flex-col lg:flex-row lg:mx-[273PX] md:mx-[100px] mx-[25px] lg:my-[87px] md:my-[57px] sm:my-[27px]"
        >
          <Berita class="mb-10 md:mr-4 lg:mb-0" :page="1"></Berita>
          <Informasi class="mb-10 md:mb-0"></Informasi>
        </div>
        <Galeri class="mb-10 md:mb-0 mx-[25px]"></Galeri>
        <Peta class="mb-10 md:mb-0 mx-[25px]"></Peta>
        <Sambutan class="mb-10 mx-[25px]"></Sambutan>
      </section>
    </NuxtLayout>
  </div>
</template>
