<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="">
    <div class="bg-[#063d63]">

      <div class="mx-[20px] md:mx-[100px] py-[50px] flex flex-col lg:flex-row lg:justify-center lg:mx-[273PX] lg:gap-[11vw]">

        <div class="flex flex-col md:flex-row md:justify-between lg:gap-[11vw]">
          <div class="flex flex-col mb-[20px] gap-[20px]">
            <div class="flex flex-col">
              <span class="inline-block uppercase text-white font-bold">Alamat</span>
              <span class="inline-block text-white break-words w-[350px] lg:w-auto">
                Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan.
                92171</span
              >
            </div>
            <div class="flex flex-col">
              <span class="inline-block uppercase text-white font-bold"
                >Kontak & Email</span
              >
              <span class="inline-block text-white">+62 852-9999-9958</span>
              <span class="inline-block text-white"> teknik@unhas.ac.id</span>
            </div>
          </div>
          
          <div class="flex flex-col mb-[20px] md:gap-[20px] justify-items-center">
            <span class="inline-block uppercase text-white font-bold lg:w-[155px]"
              >Statistik Website</span
            >
            <img
              src="@/assets/img/flag_counter.png"
              alt="visitors by country"
              class="inline-block w-[125px]"
            />
          </div>
        </div>

        <div class="flex flex-col lg:gap-[20px]">
            <div class="inline-block uppercase text-white font-bold lg:w-[215px]">Didukung oleh</div>

            <div class="flex gap-[20px]">
              <img
                src="@/assets/img/upana.png"
                alt="logo upana"
                class="flex h-[60px] lg:h-[100px] lg:w-[100px]"
              />
              <img
                src="@/assets/img/oricon.png"
                alt="logo oricon"
                class="flex h-[60px] lg:h-[100px] lg:w-[100px]"
              />
            </div>
          </div>

      </div>
    </div>
    <div class="bg-[#EB2629] h-[79px]"></div>
  </footer>
</template>

<style></style>
