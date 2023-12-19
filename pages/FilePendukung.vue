<template>
    <div class="flex flex-col justify-center lg:mx-[273px] lg:my-[87px] md:mx-[100px] sm:mx-[50px] md:my-[57px] sm:my-[27px]">
        <div id="content">
            <div id="SOP">
                <p class="text-2xl text-black font-Rubik-semibold font-semibold mb-4">SOP Kesehatan Kerja Fakultas Teknik</p>
                <div v-for="(item, index) in sopItems" :key="index" class="mb-2">
                <p>
                  <a :href="item.link" target="_blank" class="text-blue-600 visited:text-purple-600">{{ item.title }}</a>
                </p>
                </div>

            </div>
            <div id="Form">
                <p class="text-2xl text-black font-Rubik-semibold font-semibold mb-4 mt-4">FORM K3</p>
                <div v-for="(form, index) in formItems" :key="index" class="mb-2">
                <p>
                  <a :href="form.link" target="_blank" class="text-blue-600 visited:text-purple-600">{{ form.title }}</a>
                </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "SOP Kesehatan Kerja Fakultas Teknik",
      sopItems: [
        { title: "1. SOP Identifikasi Bahaya dan Pengendalian Risiko", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/1_SOP_Identifikasi_Bahaya_Penilaian_dan_Pengendalian_risiko.docx" },
        { title: "2. SOP Inspkesi K3", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/2_SOP_Inspeksi_K3.docx"},
        { title: "3. SOP APD", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/3_SOP_APD.docx"},
        { title: "4. SOP Bekerja dikantor dengan Tatanan Normal Baru", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/4_SOP_BEKERJA_DIKANTOR_DENGAN_TATANAN_NORMAL_BARU"},
        { title: "5. SOP Penyimpanan dan Pemindahan Bahan Kimia", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/5_SOP_PENYIMPANAN_DAN_PEMINDAHAN_BAHAN_KIMIA.docx"},
        { title: "6. SOP Safety Induction di Ruang Pertemuan", link: "#"},
        { title: "7. SOP Studi Lapangan", link: "#"},
        { title: "8. SOP K3 di Laboratorium", link: "#"},
        { title: "9. SOP Parkir Kendaraan", link: "#"},
        { title: "10. SOP Pelaksanaan Praktikum", link: "#"},
        { title: "11. SOP Pemakaian Ruangan", link: "#"},
        { title: "12. SOP Pemeliharaan Air Conditioner (AC)", link: "#"},
        { title: "13. SOP Pemeliharaan Gedung", link: "#"},
      ],
      formItems: [
        { title: "1. Form Permohonan Pengukuran Lingkungan Fisik", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/30_Form_Permohonan_Pengukuran_Ligkungan_Fisik.doc" },
        { title: "2. Form Permohonan Pekerjaan Listrik", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/31_Form_Permohonan_Pekerjaan_ListrikListrik.doc" },
        { title: "3. Form Permohonan Penggunaan Ruangan", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/32_Form_Permohonan_Penggunaan_Ruangan.doc" },
        { title: "4. Form Permohonan Penggunaan Lab", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/33_K3_FTUH_Form_Permohonan_Penggunaan_Lab.doc" },
        { title: "5. Form Permohonan Pengecekan AC", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/34_K3_FTUH_Form_Permohonan_Pengecekan_AC.doc" },
        { title: "6. Form Permohonan Peminjaman APD", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/35_K3_FTUH_Form_Permohonan_Peminjaman_APD.doc" },
        { title: "7. Form Pelaporan Penyelidikan FTUH", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/36_Form_Pelaporan_Penyelidikan_FTUH.xlsx" },
        { title: "8. Form JSA FTUH", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/37_FORM_JSA_FTUH.docx" },
        { title: "9. Form Self Assessment", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/38_FORM_Self_Assessment.docx" },
        { title: "10. Form Izin Kerja FTUH", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/39_From_Izin_Kerja_FTUH.xlsx" },
        { title: "11. Form Inspeksi Kerja FTUH", link: "https://eng.unhas.ac.id/fakultas/download/sop_k3/40_Form_Inspeksi_Kerja_FTUH.xlsx" },
      ],
    };
  },
};
</script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
