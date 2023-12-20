<script setup></script>

<template>
  <div class="flex flex-col">
    <Topbar></Topbar>
    <div
      class="bg-[#063d63] px-[23px] md:px-[43px] lg:px-[273px] pt-[20px] py-[25px] md:py-[0px] flex flex-col justify-end"
    >
      <div class="flex items-center py-[0px] md:py-[20px]">
        <a id="logo" class="inline-block w-[800px]" href="/">
          <img src="@/assets/img/Logo_FTUH.png" alt="FTUH Logo" class="" />
        </a>
      </div>
      <Navbar class="w-full"></Navbar>
    </div>
  </div>
</template>
