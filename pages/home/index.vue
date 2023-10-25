<template>
  <div
    class="flex flex-col justify-center align-middle h-screen overflow-x-hidden"
  >
    <div class="bg-[#EB2629] h-[30px]"></div>
    <header
      class="bg-[#063d63] px-[200px] pt-[20px] flex flex-col flex-auto justify-end"
    >
      <div class="flex-auto flex items-center">
        <a id="logo" class="inline-block w-[800px]" href="#">
          <img src="@/assets/img/Logo_FTUH.png" alt="FTUH Logo" class="" />
        </a>
      </div>

      <ul id="menu-dropdown" class="flex text-[0.688rem] text-white">
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
      class="mySwiper w-full"
    >
      <swiper-slide>
        <div class="aspect-ratio-box">
          <img
            src="@/assets/img/carousel-1.jpeg"
            alt="Gambar"
            class="object-center"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="aspect-ratio-box">
          <img
            src="@/assets/img/carousel-2.jpeg"
            alt="Gambar"
            class="object-center"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="aspect-ratio-box">
          <img
            src="@/assets/img/carousel-3.jpeg"
            alt="Gambar"
            class="object-center"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="aspect-ratio-box">
          <img
            src="@/assets/img/carousel-4.png"
            alt="Gambar"
            class="object-center"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div
    id="informasi-dan-berita"
    class="flex lg:mx-[200PX] md:mx-[100px] sm:mx-[50px] lg:my-[87px] md:my-[57px] sm:my-[27px]"
  >
    <div id="berita" class="basis-9/12 mr-[26px] relative">
      <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
        <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
        <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
          >Berita</span
        >
      </div>
      <div id="konten" class="grid grid-cols-2 grid-rows-2 gap-[3rem] relative">
        <div id="berita-1" class="">
          <img src="@/assets/img/berita-5.jpg" alt="" />
          <span class="font-bold mt-[20px] inline-block text-xl"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            hic?</span
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus dolorum beatae hic accusantium facilis
            tempore. Laborum maiores earum iste?
          </p>
        </div>
        <div id="berita-2" class="">
          <img src="@/assets/img/berita-5.jpg" alt="" />
          <span class="font-bold mt-[20px] inline-block text-xl"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            hic?</span
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus dolorum beatae hic accusantium facilis
            tempore. Laborum maiores earum iste?
          </p>
        </div>
        <div id="berita-3" class="">
          <img src="@/assets/img/berita-5.jpg" alt="" />
          <span class="font-bold mt-[20px] inline-block text-xl"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            hic?</span
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus dolorum beatae hic accusantium facilis
            tempore. Laborum maiores earum iste?
          </p>
        </div>
        <div id="berita-4" class="">
          <img src="@/assets/img/berita-5.jpg" alt="" />
          <span class="font-bold mt-[20px] inline-block text-xl"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            hic?</span
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus dolorum beatae hic accusantium facilis
            tempore. Laborum maiores earum iste?
          </p>
        </div>
      </div>
      <div class="flex justify-end mt-[30px]">
        <a class="inline-block text-[#0000EE]" href="#"
          >Lihat berita nasional yang lain>></a
        >
        <!-- <div class="flex justify-end object-right mt-6">
            </div> -->
      </div>
    </div>

    <div id="informasi" class="relative flex-auto">
      <div id="banner" class="relative w-auto bg-[#063D63]">
        <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
        <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
          >Informasi</span
        >
      </div>
      <div id="informasi-1" class="max-w-md">
        <span class="font-bold mt-[50px] inline-block text-sm"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          hic?</span
        >
        <p class="text-xs">&#x1F4C5; 23 September 2019</p>
      </div>
      <div id="informasi-1" class="max-w-md">
        <span class="font-bold mt-[50px] inline-block text-sm"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          hic?</span
        >
        <p class="text-xs">&#x1F4C5; 23 September 2019</p>
      </div>
      <div id="informasi-1" class="max-w-md">
        <span class="font-bold mt-[50px] inline-block text-sm"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          hic?</span
        >
        <p class="text-xs">&#x1F4C5; 23 September 2019</p>
      </div>
      <a class="absolute right-0 inline-block text-[#0000EE] mt-[30px]" href="#"
        >Semua Informasi>></a
      >
    </div>
  </div>

  <div class="lg:mx-[200px] lg:my-[87px]">
    <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
        >Galeri</span
      >
    </div>
    <div class="flex items-center justify-center">
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
        class="mySwiper w-full"
      >
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-0.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-1.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-2.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box img-size">
            <img
              src="@/assets/img/galeri-3.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-4.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="galeri-aspect-ratio-box">
            <img
              src="@/assets/img/galeri-6.jpeg"
              alt="Gambar"
              class="object-center"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div
    id="panorama"
    class="flex flex-col justify-center lg:mx-[200px] lg:my-[87px]"
  >
    <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
        >Peta</span
      >
    </div>
    <iframe
      autoload="true"
      allowfullscreen
      style="border-style: none"
      src="https://cdn.pannellum.org/2.5/pannellum.htm#config=https://pannellum.org/configs/tour.json"
      class="w-full h-[600px]"
    ></iframe>
  </div>

  <div class="justify-center lg:mx-[200px] lg:my-[87px]">
    <div id="banner" class="relative w-auto bg-[#063D63] mb-[52px]">
      <div class="absolute top-0 left-0 bg-[#EB2629] w-[40px] h-[88px]"></div>
      <span class="inline-block text-white my-[20px] ml-[60px] uppercase"
        >Sambutan Dekan</span
      >
    </div>
    <div
      id="sambutan-dekan"
      class="justify-center items-center flex gap-[58px]"
    >
      <img
        class="object-cover h-[300px] w-auto"
        alt="Img"
        src="@/assets/img/dekan.png"
      />
      <p id="kata-sambutan" class="object-center text-black font-Rubik-normal">
        <span class="object-center text-wrapper">
          Assalamu Alaikum Wr. Wb. Puji syukur kehadirat Tuhan Yang Maha Kuasa
          atas limpahan rahmat dan hidayah-Nya sehingga informasi tentang
          Fakultas Teknik Unhas melalui situs web ini dapat terwujud. Besar
          harapan kita semoga ridho-Nya menyertai segala aktifitas dalam upaya
          pembinaan sumber daya manusia dalam bidang teknologi dan semoga
          informasi melalui web ini dapat berguna bagi semua pihak. Kami dari
          semua civitas akademika Fakultas Teknik dengan semua dukungan komponen
          perguruan tinggi yang ada akan terus meningkatkan pencapaian menuju
          terwujudnya visi dan misi yang telah dicanangkan dalam rencana
          strategis fakultas. Semoga informasi yang diberikan lewat layanan
          website ini dapat memberikan gambaran situasi dan kondisi Fakultas
          Teknik kepada semua lapisan masyarakat. Selamat Datang di Fakultas
          Teknik Universitas Hasanuddin. Wassalam.
          <br />
          <br />
        </span>
        <span class="font-semibold font-Rubik-Bold"
          >Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN
          Eng.</span
        >
      </p>
    </div>
  </div>

  <!-- <div class="bg-cover bg-center bg-blue-600 h-[680px] relative">
    <div class="bg-red-600 border-t border-white absolute h-[79px] top-[601px]">
      <p class="text-white font-normal text-center pt-6 text-[16px]">
        Copyright © 2023 All rights reserved
      </p>
    </div>
    <div class="flex flex-col space-y-5 left-[208px] top-[220px] absolute">
      <div class="text-white font-semibold text-[20px]">ALAMAT</div>
      <div class="flex items-center space-x-5">
        <img
          class="h-[16px]"
          alt="Address icon"
          src="https://c.animaapp.com/53wX3x1P/img/address-icon.svg"
        />
        <p class="text-white">
          Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan. 92171
        </p>
      </div>
    </div>
    <div
      class="flex flex-col space-y-5 left-[209px] top-[336px] absolute w-[567px]"
    >
      <div class="text-white font-semibold text-[20px]">KONTAK &amp; EMAIL</div>
      <div class="flex flex-col space-y-5">
        <div class="flex items-center space-x-5">
          <img
            class="h-[16px]"
            alt="Phone icon"
            src="https://c.animaapp.com/53wX3x1P/img/phone-icon.svg"
          />
          <p class="text-white">+62 852-9999-9958</p>
        </div>
        <div class="flex items-center space-x-5">
          <img
            class="h-[16px]"
            alt="Email icon"
            src="https://c.animaapp.com/53wX3x1P/img/email-icon.svg"
          />
          <p class="text-white">teknik@unhas.ac.id</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col space-y-5 left-[1292px] top-[220px] absolute w-[422px]"
    >
      <div class="text-white font-semibold text-[20px]">DIDUKUNG OLEH</div>
      <div class="flex items-center space-x-5">
        <img
          class="h-[139px] w-[175px] object-cover"
          alt="Upana icon"
          src="https://c.animaapp.com/53wX3x1P/img/upana-icon@2x.png"
        />
        <img
          class="h-[118px] w-[128px] object-cover"
          alt="Oricon icon"
          src="https://c.animaapp.com/53wX3x1P/img/oricon-icon@2x.png"
        />
      </div>
    </div>
    <div class="flex space-x-5 left-[208px] top-[93px] absolute">
      <div class="bg-white h-[47px] relative w-[1413px]">
        <div class="flex items-center">
          <img
            class="h-[31px]"
            alt="Google icon"
            src="https://c.animaapp.com/53wX3x1P/img/google-icon@2x.png"
          />
        </div>
      </div>
      <img
        class="h-[47px]"
        alt="Search button"
        src="https://c.animaapp.com/53wX3x1P/img/search-button.svg"
      />
    </div>
    <div class="flex flex-col space-y-5 left-[928px] top-[211px] absolute">
      <div class="text-white font-semibold text-[20px]">SITE STATISTICS</div>
      <img
        class="h-[196px] w-[232px] object-cover"
        alt="Image"
        src="https://c.animaapp.com/53wX3x1P/img/image-11@2x.png"
      />
    </div>
  </div> -->
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

<style>
.aspect-ratio-box {
  position: relative;
  /* width: 100%; */
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
  padding: 10px 10px 30px;
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
  background-color: #eb2629;
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
  background-color: #790f11;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #eb2629;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "../../node_modules/pannellum/build/pannellum";
// import "../../node_modules/pannellum/build/pannellum.css";

// pannellum.viewer("panorama", {
//   default: {
//     firstScene: "circle",
//     author: "Matthew Petroff",
//     sceneFadeDuration: 1000,
//   },

//   scenes: {
//     circle: {
//       title: "Mason Circle",
//       hfov: 110,
//       pitch: -3,
//       yaw: 117,
//       type: "equirectangular",
//       panorama: "/images/from-tree.jpg",
//       hotSpots: [
//         {
//           pitch: -2.1,
//           yaw: 132.9,
//           type: "scene",
//           text: "Spring House or Dairy",
//           sceneId: "house",
//         },
//       ],
//     },

//     house: {
//       title: "Spring House or Dairy",
//       hfov: 110,
//       yaw: 5,
//       type: "equirectangular",
//       panorama: "/images/bma-0.jpg",
//       hotSpots: [
//         {
//           pitch: -0.6,
//           yaw: 37.1,
//           type: "scene",
//           text: "Mason Circle",
//           sceneId: "circle",
//           targetYaw: -23,
//           targetPitch: 2,
//         },
//       ],
//     },
//   },
// });

export default {
  components: {
    Swiper,
    SwiperSlide,
    // pannellum,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    let searchBarScript = document.createElement("script");
    searchBarScript.setAttribute(
      "src",
      "https://cse.google.com/cse.js?cx=c30d7581fd6b8431c"
    );
    document.head.appendChild(searchBarScript);
  },
};
</script>
