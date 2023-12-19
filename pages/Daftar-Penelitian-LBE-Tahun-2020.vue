<template id="tabel-template">
    <Header class="flex mb-0"></Header>
    <div class="max-w-3xl xl:max-w-7xl mx-auto my-[50px]">
        <table class="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Nama</th>
                    <th class="py-2 px-4 border-b">NIP</th>
                    <th class="py-2 px-4 border-b">Judul</th>
                    <th class="py-2 px-4 border-b">Program Studi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nama }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nip }}</td>
                    <td class="py-2 px-4 border-b">{{ item.judul }}</td>
                    <td class="py-2 px-4 border-b">{{ item.program_studi }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <Footer></Footer>
</template>


<script>
export default {
    name: "data",
    data() {
        return {
            data: [
                { nama: 'Prof. Baharuddin, ST, M.Arch.,Ph.D', nip: '19690308 199512 1 001', judul: 'Studi Komparatif Kenyamanan Termal Siswa Sekolah Dasar Di Kota Makassar', program_studi: 'Fakultas' },
                { nama: 'Ilham Alimuddin, S.T, M.Gis, Ph.D', nip: '19690825 199903 1 001', judul: 'Perubahan Permukaan Tanah Pasca Gempa Palu dengan Aplikasi Data SAR', program_studi: 'Fakultas' },
                { nama: 'Dr. Eng. Abdul Mufti Radja, ST., MT.', nip: '19690304 199903 1 004', judul: 'Pengaruh Pandemi Covid 19 Terhadap Penggunaan Ruang Ketiga Oleh Mahasiswa Fakultas Teknik Universitas Hasanuddin', program_studi: 'Fakultas' },
                { nama: 'Ir. Mukti Ali, ST., MT., Ph.D', nip: '19741211 200501 1 001', judul: 'Kajian Pengembangan Kawasan Pesisir Sebagai Zona Konservasi Mangrove dengan Pendekatan Urban Design.', program_studi: 'Fakultas' },
                { nama: 'Dr-Eng. Achmad Yasir Baeda, ST., MT', nip: '19730709 200003 1 001', judul: 'Skema Pemunculan MJO di Indonesia, serta Hubungannya dengan ENSO dan PDO', program_studi: 'Fakultas' },
                { nama: 'Prof.Dr.Ir. Muhammad Arsyad, MT', nip: '19601231 198609 1 001', judul: 'Pengaruh Tinggi Jagaan Caisson CSP-MS Terhadap Besarnya Energi Gelombang Yang Bisa Ditangkap.', program_studi: 'Fakultas' },
                { nama: 'Adnan, ST, MT, Ph.D.', nip: '19740426 200312 1 002', judul: 'Optimasi Program Rekonstruksi Citra MRI dengan Pemrograman Multithreading OpenMP Pada Mini PC Berdaya Rendah', program_studi: 'Informatika' },
                { nama: 'Dr. Ir.Ingrid Nurtanio, M.T', nip: '19610813 198811 2 001', judul: 'Sistem Presensi Mahasiswa Berbasis Multi-face Recognition dengan Histogram of Oriented Gradients', program_studi: 'Informatika' },
                { nama: 'A.Ais Prayogi Alimuddin, ST, M.Eng', nip: '19830510 201404 1 001', judul: 'Sistem Berbasis Android untuk Deteksi Emosi Menggunakan Fitur Ekspresi Wajah', program_studi: 'Informatika' },
                { nama: 'Dr.Eng. Zulkifli Tahir, ST., MSc', nip: '19840403 201012 1 004', judul: 'User Acceptance Test Untuk Aplikasi Cerdas Pelayanan Pemesanan Obat Di Rumah Sakit Universitas Hasanuddin Berbasis Android', program_studi: 'Informatika' },
                { nama: 'Anugrayani Bustamin,ST.,M.T', nip: '199012012001807 4 001', judul: 'Model Analisis Sentimen Pada Ulasan Pengguna Untuk Rekomendasi E-Wallet', program_studi: 'Informatika' },
                { nama: 'Mukarramah Yusuf, B.Sc.,M.Sc', nip: '19831008 201212 2 003', judul: 'Analisa dan Perbandingan Pembangkit Bilangan Acak dengan Metode Monte Carlo.', program_studi: 'Informatika' },
                { nama: 'Dr.Ir.Zahir Zainuddin,M.Sc', nip: '19640427 198910 1 002', judul: 'Usulan Algoritma D32 Untuk Pemodelan Aliran Air Permukaan', program_studi: 'Informatika' },
                { nama: 'Dr. Amil Ahmad Ilham, S.T., M.IT', nip: '19731010 199802 1 001', judul: 'Integrasi Algoritma Data Mining pada Sistem Informasi Sumber Daya Manusia untuk Menilai Kinerja Karyawan', program_studi: 'Informatika' },
                { nama: 'Dr.Ir. Muhammad Ramli, MT', nip: '19680718 199309 1 001', judul: 'Rekonstruksi Lapisan Pembawa Air Tanah Kota Majene Berdasarkan Nilai Tahanan Jenis Batuan', program_studi: 'Pertambangan' },
                { nama: 'Asran Ilyas, ST.,MT.,Ph.D.', nip: '197303142000121001', judul: 'Analisis Kontinuitas Seam Batubara Berdasarkan Data Geophysical Well Logging dan Sampel Pengeboran', program_studi: 'Pertambangan' },
                { nama: 'Dr. Sufriadin, ST., MT.', nip: '196608172000121001', judul: 'Analisis Mineralogi dan Logam Tanah Jarang Pada Batubara Daerah Barru, Sulawesi Selatan', program_studi: 'Pertambangan' },
                { nama: 'Dr. Aryanti Virtanti Anas, ST.,MT.', nip: '197010052008012026', judul: 'Penentuan Pit Limit Tambang Nikel Laterit di PT Ang and Fang Brother Provinsi Sulawesi Tengah', program_studi: 'Pertambangan' },
                { nama: 'Nirmana Fiqra Qaidahiyani, S.T., M.T.', nip: '199304222019032018', judul: 'Studi Pengaruh Perubahan Temperatur Terhadap Sifat Fisik dan Mekanis Batuan Basalt', program_studi: 'Pertambangan' },
                { nama: 'Dr.Eng. Ir. Rosady Mulyadi, ST., MT', nip: '197008101998021001', judul: 'Indoor Environmental Quality (IEQ) Ruang Kelas di Area Sub-Urban Pada Masa Pandemi Covid-19', program_studi: 'Arsitektur' },
                { nama: 'Dr.Eng. Ir. Asniawaty, ST., MT.', nip: '197109251999032001', judul: 'Evaluasi Performa Audio Ruang Masjid Besar Al-Abrar Makassar', program_studi: 'Arsitektur' },
                { nama: 'Dr. Ir. Hj. Nurul Nadjmi, ST., MT.', nip: '197609042002122001', judul: 'Modal Sosial Dalam Pengembangan Pariwisata Berbasis Maritim di Kota Makassar', program_studi: 'Arsitektur' },
                { nama: 'Dr. Ir. M. Yahya, ST., M.Eng', nip: '197004041997031001', judul: 'Evaluasi Kawasan Permukiman Kumuh di Kelurahan Panampu Kecamatan Tallo Kota Makassar', program_studi: 'Arsitektur' },
                { nama: 'Dr. Rahmi Amin Ishak, ST., MT.', nip: '197603142002122005', judul: 'Analisis Konfigurasi Ruang Kuliah dan Fasilitas Kampus Teknik Unhas Gowa', program_studi: 'Arsitektur' },
                { nama: 'Teguh Iswadi Suardi, ST. MSc', nip: '19900125 202107 3 001', judul: 'Pendekatan Perancangan Fasad Bangunan Berdasarkan Tipologi Arsitektur Kolonial di Jalan Kayutangan, Malang', program_studi: 'Arsitektur' },
                { nama: 'Dr. Ir. Ria Wikantari Rosalia, M.Arch.', nip: '19610915 198811 2 001', judul: 'Arsitektur Raung Bermain Anak di Lingkungan Pulau Kecil Berbasis Teori Affordance', program_studi: 'Arsitektur' },
                { nama: 'Dr. Syahriana Syam, ST.,MT', nip: '19751124 200604 2 032', judul: 'Konsep Pasipupukan sebagai Pembentuk Ruang Komunal Hunian Perairan Laut', program_studi: 'Arsitektur' },
            ],
        };
    },
};
</script>