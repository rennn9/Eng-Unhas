<script>
export default {
  name: "Peta",
};
</script>

<template>
  <div
    id="panorama"
    class="flex flex-col justify-center lg:mx-[273px] lg:my-[87px] md:mx-[100px] sm:mx-[50px] md:my-[57px] sm:my-[27px]"
  >
  <Banner></Banner>
    <iframe
      autoload="true"
      allowfullscreen
      style="border-style: none"
      src="https://cdn.pannellum.org/2.5/pannellum.htm#config=https://pannellum.org/configs/tour.json"
      class="w-full h-[600px]"
    ></iframe>
  </div>
</template>

<style></style>
