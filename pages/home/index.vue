<template>
    <header class="bg-[#063d63]">
      <div id=logo class="container py-[20px]">
        <img src="@/assets/img/Logo_FTUH.png" alt="FTUH Logo" class="w-[48%] lg:mx-[200PX] md:mx-[100px] sm:mx-[50px]" />
      </div>
      
      <ul id=menu-dropdown class="flex lg:mx-[200PX] md:mx-[100px] sm:mx-[50px] text-[0.688rem] text-white">
        <li>
          <div class="dropdown">
            <button class="dropbtn">PROFILE</button>
            <div class="dropdown-content">
              <a href="#">BERITA</a>
              <a href="#">SEJARAH SINGKAT</a>
              <a href="#">VISI, MISI DAN SASARAN</a>
              <a href="#">MANAJEMEN</a>
              <a href="#">STRUKTUR ORGANISASI</a>
              <a href="#">MASTER PLAN</a>
              <a href="#">PETA KAMPUS</a>
              <a href="#">MEDIATEK</a>
            </div>
          </div>
        </li>
        
        <li>
          <div class="dropdown">
            <button class="dropbtn">AKADEMIK</button>
            <div class="dropdown-content">
              <a href="#">DEPARTEMEN</a>
              <a href="#">PROGRAM MAGISTER</a>
              <a href="#">PROGRAM DOKTOR</a>
              <a href="#">PROGRAM PROFESI</a>
              <a href="#">AKREDITASI</a>
              <a href="#">KALENDER AKADEMIK</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">SUMBER DAYA</button>
            <div class="dropdown-content">
              <a href="#">GURU BESAR</a>
              <a href="#">TENAGA PENDIDIKAN</a>
              <a href="#">SARANAN DAN PRASANA</a>
              <a href="#">PERPUSTAKAAN</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">K3</button>
            <div class="dropdown-content">
              <a href="#">PROFIL K3</a>
              <a href="#">STRUKTUR ORGANISASI K3</a>
              <a href="#">TENTANG K3 FT-UH</a>
              <a href="#">FILE PENDUKUNG</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">KEMAHASISWAAN</button>
            <div class="dropdown-content">
              <a href="#">UPT ASRAMA (RAMTEK)</a>
              <a href="#">PENGEMBANGAN KARAKTER MAHASISWA</a>
              <a href="#">PENINGKATAN PRESTASI MAHASISWA</a>
              <a href="#">MAHASISWA INBOUND DAN OUTBOUND</a>
              <a href="#">ALUMNI</a>
              <a href="#">ATURAN KEMAHASISWAAN</a>
              <a href="#">PENGUMUMAN</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">RISET DAN INOVASI</button>
            <div class="dropdown-content">
              <a href="#">DAFTAR PENELITIAN LBE TAHUN 2020</a>
              <a href="#">HASIL INOVASI</a>
              <a href="#">HAK KEKAYAAN INTELEKTUAL</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">KEMITRAAN</button>
            <div class="dropdown-content">
              <a href="#">KERJA SAMA DALAM NEGERI</a>
              <a href="#">KERJA SAMA LUAR NEGERI</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">GPM-PR</button>
            <div class="dropdown-content">
              <a href="#">PROFIL GPM-PR</a>
              <a href="#">DOKUMEN MUTU</a>
              <a href="#">AUDIT MUTU AKADEMIK INTERNAL</a>
              <a href="#">AKREDITASI</a>
              <a href="#">LAM TEKNIK</a>
              <a href="#">LAPORAN KEPUASAN PENGGUNA</a>
              <a href="#">SURVEI KEPUASAN LAYANAN MAHASISWA</a>
              <a href="#">GALERI</a>
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">COT</button>
            <div class="dropdown-content">
              <a href="#">COT WEBSITE</a>
              <a href="#">JURNAL COT</a>
              <a href="#">COT NEWSLETTER</a>
              <a href="#">U-I-G COLLABORATION</a>            
            </div>
          </div>
        </li>

        <li>
          <div class="dropdown">
            <button class="dropbtn">DHARMA WANITA</button>
            <div class="dropdown-content">
              <a href="#">HALAMAN UTAMA DHARMA WANITA</a>
              <a href="#">PROFIL DHARMA WANITA</a>
              <a href="#">STRUKTUR ORGANISASI DHARMAWANITA</a>
              <a href="#">PROGRAM KERJA</a>
              <a href="#">KEGIATAN DHARMA WANITA</a>
            </div>
          </div>
        </li>
      </ul>
    </header>

  <!-- carousel using library: swiper js -->
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="aspect-ratio-box">
        <img src="@/assets/img/carousel-1.jpeg" alt="Gambar" class="object-center ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aspect-ratio-box">
        <img src="@/assets/img/carousel-2.jpeg" alt="Gambar" class="object-center ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aspect-ratio-box">
        <img src="@/assets/img/carousel-3.jpeg" alt="Gambar" class="object-center ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aspect-ratio-box">
        <img src="@/assets/img/carousel-4.png" alt="Gambar" class="object-center ">
      </div>
    </swiper-slide>
  </swiper>

    <div id="informasi-dan-berita" class="flex lg:mx-[200PX] md:mx-[100px] sm:mx-[50px] lg:my-[87px] md:my-[57px] sm:my-[27px]">
      <div id="berita" class="w-[1136px] mr-[26px] relative">
        <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
          <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
          <span class="inline-block text-white my-[20px] ml-[60px] uppercase">Berita</span>
        </div>
        <div id="konten" class="grid grid-cols-2 grid-rows-2 gap-[3rem] relative">
          <div id="berita-1" class="">
            <img src="@/assets/img/berita-5.jpg" alt="">
            <span class="font-bold mt-[20px] inline-block text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?</p>
          </div>
          <div id="berita-2" class="">
            <img src="@/assets/img/berita-5.jpg" alt="">
            <span class="font-bold mt-[20px] inline-block text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?</p>
          </div>
          <div id="berita-3" class="">
            <img src="@/assets/img/berita-5.jpg" alt="">
            <span class="font-bold mt-[20px] inline-block text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?</p>
          </div>
          <div id="berita-4" class="">
            <img src="@/assets/img/berita-5.jpg" alt="">
            <span class="font-bold mt-[20px] inline-block text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus dolorum beatae hic accusantium facilis tempore. Laborum maiores earum iste?</p>
          </div>
        </div>
        <a class="inline-block text-[#0000EE] absolute right-0 mt-[30px]" href="#">Lihat berita nasional yang lain>></a>
        <!-- <div class="flex justify-end object-right mt-6">
        </div> -->
      </div>
      
      <div id="informasi" class="relative flex-auto">
        <div id="banner" class="relative w-auto bg-[#063D63]">
          <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
          <span class="inline-block text-white my-[20px] ml-[60px] uppercase">Informasi</span>
        </div>
        <div id="informasi-1" class="max-w-md">
            <span class="font-bold mt-[50px] inline-block text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p class="text-xs ">&#x1F4C5; 23 September 2019</p>
        </div>
        <div id="informasi-1" class="max-w-md">
            <span class="font-bold mt-[50px] inline-block text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p class="text-xs ">&#x1F4C5; 23 September 2019</p>
        </div>
        <div id="informasi-1" class="max-w-md">
            <span class="font-bold mt-[50px] inline-block text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic?</span>
            <p class="text-xs ">&#x1F4C5; 23 September 2019</p>
        </div>
        <a class=" absolute right-0 inline-block text-[#0000EE] mt-[30px]" href="#">Semua Informasi>></a>
      </div>
    </div>

    <div class="lg:mx-[200px] lg:my-[87px]">
      <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
          <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
          <span class="inline-block text-white my-[20px] ml-[60px] uppercase">Galeri</span>
        </div>
      <div class="flex items-center justify-center ">        
        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :spaceBetween="10"
          :slidesPerView="3"
          :loop="true"
          :modules="modules"
          class="mySwiper w-[1200px]"
          >
          <swiper-slide>
            <div class="galeri-aspect-ratio-box">
              <img src="@/assets/img/galeri-0.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="galeri-aspect-ratio-box">
              <img src="@/assets/img/galeri-1.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="galeri-aspect-ratio-box">
              <img src="@/assets/img/galeri-2.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="galeri-aspect-ratio-box img-size">
              <img src="@/assets/img/galeri-3.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="galeri-aspect-ratio-box">
              <img src="@/assets/img/galeri-4.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="galeri-aspect-ratio-box">
              <img src="@/assets/img/galeri-6.jpeg" alt="Gambar" class="object-center ">
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
      
  </template>

  <style>
    .aspect-ratio-box {
      position: relative;
      width: 100%;
      padding-bottom: 43.25%;
    }

    .aspect-ratio-box img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .galeri-aspect-ratio-box {
      position: relative;
      /* width: 100%;
      padding-bottom: 43.25%; */
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }    

    .galeri-aspect-ratio-box img {
      position: absolute;
      /* top: 0;
      left: 0; */
      display: block;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    .dropbtn {
      background-color: rgb(6, 61, 99);
      color: white;
      padding: 20px 10px;
      font-size: 0.688rem;
      border: none;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      margin-left: 20%;
      background-color: #EB2629;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 99999;
    }

    .dropdown-content a {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #790F11;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown:hover .dropbtn {
      background-color: #EB2629;
    }
  </style>

  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';


    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';

    export default {
      components: {
        Swiper,
        SwiperSlide,
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
      },
    };
  </script>