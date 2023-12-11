<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarMenus: [
        {
          menuName: "Profil",
          childMenus: [
            "Berita",
            "Sejarah Singkat",
            "Visi, Misi, dan Sasaran",
            "Manajemen",
            "Struktur Organisasi",
            "Master Plan",
            "Peta Kampus",
            "Mediatek",
          ],
        },
        {
          menuName: "Akademik",
          childMenus: [
            "Departemen",
            "Program Magister",
            "Program Doktor",
            "Program Profesi",
            "Akreditasi",
            "Kalender Akademik",
          ],
        },
        {
          menuName: "Sumber Daya",
          childMenus: [
            "Guru Besar",
            "Tenaga Kependidikan",
            "Sarana dan Prasarana",
            "Perpustakaan",
          ],
        },
        {
          menuName: "K3",
          childMenus: [
            "Profil K3",
            "Struktur Organisasi K3",
            "Tentang K3 FT-UH",
            "File Pendukung",
          ],
        },
        {
          menuName: "Kemahasiswaan",
          childMenus: [
            "UPT Asrama (Ramtek)",
            "Pengembangan Karakter Mahasiswa",
            "Peningkatan Prestasi Mahasiswa",
            "Mahasiswa Inbound dan Outbound",
            "Alumni",
            "Aturan Kemahasiswaan",
            "Pengumuman",
          ],
        },
        {
          menuName: "Riset dan Inovasi",
          childMenus: [
            "Daftar Penelitian LBE Tahun 2020",
            "Hasil Inovasi",
            "Hak Kekayaan Intelektual",
          ],
        },
        {
          menuName: "Kemitraan",
          childMenus: ["Kerjasama Dalam Negeri", "Kerjasama Luar Negeri"],
        },
        {
          menuName: "GPM-PR",
          childMenus: [
            "Profil GPM-PR",
            "Dokumen Mutu",
            "Audit Mutu Akademik Internal",
            "Akreditasi",
            "LAM Teknik",
            "Laporan Kepuasan Pengguna",
            "Survei Kepuasan Layanan Mahasiswa",
            "Galeri",
          ],
        },
        {
          menuName: "COT",
          childMenus: [
            "COT Website",
            "Jurnal COT",
            "COT Newsletter",
            "U-I-G Collaboration",
          ],
        },
        {
          menuName: "Dharma Wanita",
          childMenus: [
            "Halaman Utama Dharma Wanita",
            "Profil Dharma Wanita",
            "Struktur Organisasi Dharma Wanita",
            "Program Kerja",
            "Kegiatan Dharma Wanita",
          ],
        },
        {
          menuName: "Bahasa",
          childMenus: ["ID", "EN"],
        },
      ],
    };
  },
};
</script>

<template>
  <ul id="menu-dropdown" class="flex flex-col md:flex-row text-white w-full">
    <li v-for="menu in navbarMenus" :key="menu.menuName">
      <div class="relative inline-block group text-[0.688rem]">
        <button
          class="bg-[#063D63] text-white pt-[10px] px-[10px] pb-[30px] border-none uppercase group-hover:bg-[#eb2629]">
          {{ menu.menuName }}
        </button>
        <div
          class="hidden absolute ml-[20%] bg-[#eb2629] min-w-[160px] shadow-[0_8px_16px_0_rgba(0, 0, 0, 0.2)] z-[999999] group-hover:block">
          <a v-for="(childMenu, index) in menu.childMenus" :key="index" href="#"
            class="text-white py-[12px] px-[16px] block uppercase hover:bg-[#790f11]">{{ childMenu }}</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<style></style>