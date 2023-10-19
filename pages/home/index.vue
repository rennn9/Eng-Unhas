<template>
    <header class="  bg-[#063d63]">
      <div class="container py-[20px]">
        <img src="@/assets/img/Logo_FTUH.png" alt="FTUH Logo" class="w-auto h-16 mx-[200PX] " />
      </div>
      
      <ul class="flex mx-[200px] text-[11px] text-white">
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">PROFILE</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">AKADEMIK</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">SUMBER DAYA</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">K3</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">KEMAHASISWAAN</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">RIEST DAN INOVASI</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">KEMITRAAN</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">GPM-PR</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">COT</a></li>
        <li class="container w-auto px-[10px] py-[20px] hover:bg-[#EB2629] box-content"><a href="#">DHARMA WANITA</a></li>
      </ul>
    </header>

    <div class="aspect-ratio-box">
      <img src="@/assets/img/ftuh.jpg" alt="Gambar" class="object-cover w-full h-full">
    </div>
</template>

  <style>
    .aspect-ratio-box {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
    }

    .aspect-ratio-box img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 77%;
    }
  </style>