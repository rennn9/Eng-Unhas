<template id="tabel-template">
    <Header class="flex mb-0"></Header>
    <div class="max-w-3xl xl:max-w-7xl mx-auto my-[50px]">

        <!-- Tabel Paten -->
        <span id="title" class="flex font-bold mb-[10px]">Paten</span>
        <table class="min-w-full bg-white border border-gray-300 shadow-md mb-[20px]">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Status</th>
                    <th class="py-2 px-4 border-b">Inventor</th>
                    <th class="py-2 px-4 border-b">Inovasi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data_paten" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.status }}</td>
                    <td class="py-2 px-4 border-b">{{ item.inventor }}</td>
                    <td class="py-2 px-4 border-b">{{ item.inovasi }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Desain Industri -->
        <span id="title" class="flex font-bold mb-[10px]">Desain Industri</span>
        <table class="min-w-full bg-white border border-gray-300 shadow-md mb-[20px]">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Status</th>
                    <th class="py-2 px-4 border-b">Pendesain</th>
                    <th class="py-2 px-4 border-b">Nama Ciptaan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data_desain_industri" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.status }}</td>
                    <td class="py-2 px-4 border-b">{{ item.pendesain }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nama_ciptaan }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Merek -->
        <span id="title" class="flex font-bold mb-[10px]">Merek</span>
        <table class="min-w-full bg-white border border-gray-300 shadow-md mb-[20px]">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Status</th>
                    <th class="py-2 px-4 border-b">Pemilik</th>
                    <th class="py-2 px-4 border-b">Merek</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data_merek" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.status }}</td>
                    <td class="py-2 px-4 border-b">{{ item.pemilik }}</td>
                    <td class="py-2 px-4 border-b">{{ item.merek }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Hak Cipta -->
        <span id="title" class="flex font-bold mb-[10px]">Hak Cipta</span>
        <table class="min-w-full bg-white border border-gray-300 shadow-md mb-[20px]">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Nomor Permohonan</th>
                    <th class="py-2 px-4 border-b">Pencipta</th>
                    <th class="py-2 px-4 border-b">Nama Ciptaan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data_hak_cipta" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nomor_permohonan }}</td>
                    <td class="py-2 px-4 border-b">{{ item.pencipta }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nama_ciptaan }}</td>
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
            data_paten: [
                { status: 'Masa Pengumuman', inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', inovasi: 'PAPAN CETAK SIRKUIT ELEKTRONIK MODULAR UNTUK PENGEMBANGAN HIPERKOMPUTER ATAU SUPERKOMPUTER' },
                { status: 'Pelayanan Teknis', inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', inovasi: 'PEMBANGKIT LISTRIK TENAGA SOLAR-TERMAL UNTUK SISTEM PENDINGIN MOBIL PARKIR' },
                { status: 'Pembuatan Sertifikat', inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', inovasi: 'BUKU PINTAR ELEKTRONIK' },
            ],
            data_desain_industri: [
                { status: 'Didaftar', pendesain: 'Ir. Syarifuddin Dewa, M.Si', nama_ciptaan: 'Kapal Layar' },
            ],
            data_merek: [
                {
                    status: 'Pelayanan Teknis',
                    pemilik: 'Rafiuddin Syam, ST., M.Eng.,PhD ; Aswar Hayat, ST., M.Sc.,Ph.D ; Dr.-Eng Andi Amijoyo Mochtar, ST., M.Sc. ; Dr-Ing. Faizal Arya Samman, ST, MT. ; Amiruddin, ST.,MT ; Arham Hamid, SE., M.Si',
                    merek: 'Moliku'
                },
            ],
            data_hak_cipta: [
                { nomor_permohonan: 'C00201816271', pencipta: 'Indrabayu', nama_ciptaan: 'Sistem Transportasi Cerdas (Tinjauan Pengkodean Dengan MATLAB)' },
                { nomor_permohonan: 'EC00201860073', pencipta: 'Indrabayu', nama_ciptaan: 'Menjadi Technopreneur (Pendekatan Business Model Canvas)' },
                { nomor_permohonan: 'EC00201860072', pencipta: 'Syafruddin Syarif', nama_ciptaan: 'Model Sistem Cerdas Untuk Deteksi Awal Penebangan Liar Kawasan Hutan Pada Daerah Aliran Sungai' },
                { nomor_permohonan: 'EC00201857683', pencipta: 'Muhammad Isran Ramli', nama_ciptaan: 'Model Ketepatan Penentuan Lokasi Transit Oriented Development (TOD)' },
            ],
        };
    },
};
</script>
