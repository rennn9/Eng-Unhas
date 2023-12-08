<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="">
    <div class="bg-[#063d63]">
      <div class="mx-[200px] py-[50px] flex flex-col">
        <div class="pb-[30px]">
          <div class="gcse-search"></div>
        </div>
        <div class="flex justify-around">
          <div class="flex flex-col gap-[20px]">
            <div class="flex flex-col">
              <span class="inline-block uppercase text-white">Alamat</span>
              <span class="inline-block text-white">
                Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan.
                92171</span
              >
            </div>
            <div class="flex flex-col">
              <span class="inline-block uppercase text-white"
                >Kontak & Email</span
              >
              <span class="inline-block text-white">+62 852-9999-9958</span>
              <span class="inline-block text-white"> teknik@unhas.ac.id</span>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <span class="inline-block uppercase text-white"
              >Statistik Website</span
            >
            <img
              src="@/assets/img/flag_counter.png"
              alt="visitors by country"
              class="inline-block"
            />
          </div>
          <div class="flex flex-col gap-[20px]">
            <span class="inline-block uppercase text-white">Didukung oleh</span>
            <div class="flex gap-[20px]">
              <img
                src="@/assets/img/upana.png"
                alt="logo upana"
                class="inline-block h-[100px] w-[100px]"
              />
              <img
                src="@/assets/img/oricon.png"
                alt="logo oricon"
                class="inline-block h-[100px] w-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#EB2629] h-[79px]"></div>
  </footer>
</template>

<style></style>
