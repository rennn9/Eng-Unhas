<script setup>
// successful fetch
// const { data: result } = await useFetch("http://localhost:8055/items/global");
</script>

<template>
  <div>
    <Header></Header>
    <div
      id="informasi-dan-berita"
      class="flex lg:mx-[273PX] md:mx-[100px] sm:mx-[50px] lg:my-[87px] md:my-[57px] sm:my-[27px]"
    >
      <Berita></Berita>
      <Informasi></Informasi>
    </div>
    <Galeri></Galeri>
    <Peta></Peta>
    <Sambutan></Sambutan>
    <Footer></Footer>
  </div>
</template>

<style></style>
