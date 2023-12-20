<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarMenus: [
        {
          menuName: "Profil",
          childMenus: [
            { name: "Berita", target: "/" },
            { name: "Sejarah Singkat", target: "/sejarah-singkat" },
            {
              name: "Visi, Misi, dan Sasaran",
              target: "/visi-misi-dan-sasaran",
            },
            { name: "Manajemen", target: "/manajemen" },
            { name: "Struktur Organisasi", target: "/struktur-organisasi" },
            { name: "Master Plan", target: "/master-plan" },
            { name: "Peta Kampus", target: "/peta-kampus" },
            { name: "Mediatek", target: "/mediatek" },
          ],
        },
        {
          menuName: "Akademik",
          childMenus: [
            { name: "Departemen", target: "/departemen" },
            { name: "Program Magister", target: "/program-magister" },
            { name: "Program Doktor", target: "/program-doktor" },
            { name: "Program Profesi", target: "/program-profesi" },
            { name: "Akreditasi", target: "/akreditasi" },
            { name: "Kalender Akademik", target: "/kalender-akademik" },
          ],
        },
        {
          menuName: "Sumber Daya",
          childMenus: [
            { name: "Guru Besar", target: "/guru-besar" },
            { name: "Tenaga Kependidikan", target: "/tenaga-kependidikan" },
            { name: "Sarana dan Prasarana", target: "/sarana-dan-prasarana" },
            { name: "Perpustakaan", target: "/perpustakaan" },
          ],
        },
        {
          menuName: "K3",
          childMenus: [
            { name: "Profil K3", target: "/profil-k3" },
            {
              name: "Struktur Organisasi K3",
              target: "/struktur-organisasi-k3",
            },
            { name: "Tentang K3 FT-UH", target: "/tentang-k3-ft-uh" },
            { name: "File Pendukung", target: "/file-pendukung" },
          ],
        },
        {
          menuName: "Kemahasiswaan",
          childMenus: [
            { name: "UPT Asrama (Ramtek)", target: "/upt-asrama-ramtek" },
            {
              name: "Pengembangan Karakter Mahasiswa",
              target: "/pengembangan-karakter-mahasiswa",
            },
            {
              name: "Peningkatan Prestasi Mahasiswa",
              target: "/peningkatan-prestasi-mahasiswa",
            },
            {
              name: "Mahasiswa Inbound dan Outbound",
              target: "/mahasiswa-inbound-dan-outbound",
            },
            { name: "Alumni", target: "/alumni" },
            { name: "Aturan Kemahasiswaan", target: "/aturan-kemahasiswaan" },
            { name: "Pengumuman", target: "/pengumuman" },
          ],
        },
        {
          menuName: "Riset dan Inovasi",
          childMenus: [
            {
              name: "Daftar Penelitian LBE Tahun 2020",
              target: "/daftar-penelitian-lbe-tahun-2020",
            },
            { name: "Hasil Inovasi", target: "/hasil-inovasi" },
            {
              name: "Hak Kekayaan Intelektual",
              target: "/hak-kekayaan-intelektual",
            },
          ],
        },
        {
          menuName: "Kemitraan",
          childMenus: [
            {
              name: "Kerjasama Dalam Negeri",
              target: "/kerjasama-dalam-negeri",
            },
            { name: "Kerjasama Luar Negeri", target: "/kerjasama-luar-negeri" },
          ],
        },
        {
          menuName: "GPM-PR",
          childMenus: [
            { name: "Profil GPM-PR", target: "/profil-gpm-pr" },
            { name: "Dokumen Mutu", target: "/dokumen-mutu" },
            {
              name: "Audit Mutu Akademik Internal",
              target: "/audit-mutu-akademik-internal",
            },
            { name: "Akreditasi", target: "/akreditasi" },
            { name: "LAM Teknik", target: "/lam-teknik" },
            {
              name: "Laporan Kepuasan Pengguna",
              target: "/laporan-kepuasan-pengguna",
            },
            {
              name: "Survei Kepuasan Layanan Mahasiswa",
              target: "/survei-kepuasan-layanan-mahasiswa",
            },
            { name: "Galeri", target: "/galeri" },
          ],
        },
        {
          menuName: "COT",
          childMenus: [
            { name: "COT Website", target: "/cot-website" },
            { name: "Jurnal COT", target: "/jurnal-cot" },
            { name: "COT Newsletter", target: "/cot-newsletter" },
            { name: "U-I-G Collaboration", target: "/u-i-g-collaboration" },
          ],
        },
        {
          menuName: "Dharma Wanita",
          childMenus: [
            {
              name: "Halaman Utama Dharma Wanita",
              target: "/halaman-utama-dharma-wanita",
            },
            { name: "Profil Dharma Wanita", target: "/profil-dharma-wanita" },
            {
              name: "Struktur Organisasi Dharma Wanita",
              target: "/struktur-organisasi-dharma-wanita",
            },
            { name: "Program Kerja", target: "/program-kerja" },
            {
              name: "Kegiatan Dharma Wanita",
              target: "/kegiatan-dharma-wanita",
            },
          ],
        },
        {
          menuName: "Bahasa",
          childMenus: [
            { name: "ID", target: "/" },
            { name: "EN", target: "/" },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <ul
    id="menu-dropdown"
    class="hidden md:flex flex-col md:flex-row text-white w-full"
  >
    <li v-for="(menu, index) in navbarMenus" :key="menu.menuName">
      <div class="relative inline-block group text-[0.688rem]">
        <button
          class="bg-[#063D63] text-white pt-[10px] px-[10px] pb-[30px] border-none uppercase group-hover:bg-[#eb2629]"
        >
          {{ menu.menuName }}
        </button>
        <div
          class="hidden absolute ml-[20%] bg-[#eb2629] min-w-[160px] shadow-[0_8px_16px_0_rgba(0, 0, 0, 0.2)] z-[999999] group-hover:block"
        >
          <a
            v-for="childMenu in menu.childMenus"
            :key="childMenu.name + index"
            :href="childMenu.target"
            class="text-white py-[12px] px-[16px] block uppercase hover:bg-[#790f11]"
            >{{ childMenu.name }}</a
          >
        </div>
      </div>
    </li>
  </ul>
</template>

<style></style>
