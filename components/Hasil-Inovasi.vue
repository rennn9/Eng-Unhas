<template id="tabel-template">
    <Header class="flex mb-0"></Header>
    <div class="max-w-3xl xl:max-w-7xl mx-auto my-[50px]">
        <table class="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Nama Inovasi</th>
                    <th class="py-2 px-4 border-b">Inovator</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border-b">{{ item.nama_inovasi }}</td>
                    <td class="py-2 px-4 border-b">{{ item.inovator }}</td>
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
                { nama_inovasi: 'Smart Wheel Chair', inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
                { nama_inovasi: 'MOLIKU', inovator: 'Rafiuddin Syam, ST., M.Eng. Ph.D' },
                { nama_inovasi: 'Smart Room (Miniatur)', inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
                { nama_inovasi: 'Smart Parking', inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
                { nama_inovasi: 'ATM Beras', inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
                { nama_inovasi: 'Sistem Fluidisasi sebagai Alternative Baru Pemeriharaan Alur Perairan', inovator: 'Muhammad Arsyad Thaha' },
                { nama_inovasi: 'Breakwater, Dari Penghancur Energi Gelombang ke Penangkap Energi Gelombang', inovator: 'Dr. Muhammad Arsyad Thaha' },
                { nama_inovasi: 'KALINA (Kapal Listrik Nelayan)', inovator: 'Dr. Faisal Mahmuddin' },
                { nama_inovasi: 'Sistem Monitoring Aplikasi Energi Terbarukan', inovator: 'Dr. Faisal Mahmuddin' },
                { nama_inovasi: 'Open Loop Ground Heat Pump (GHP)', inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
                { nama_inovasi: 'Solar Water Heater dengan PCM Storage', inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
                { nama_inovasi: 'Pompa air tenaga matahari untuk petani palawija', inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
                { nama_inovasi: 'Gading Baja sebagai Pengganti Gading Kayu pada Kapal Kayu', inovator: 'Lukman Bochary ST., MT.' },
                { nama_inovasi: 'Perahu Fiberglass untuk Petani Rumput Laut', inovator: 'Syamsul Asri, ST., MT.' },
                { nama_inovasi: 'Desain Perumahan dan Lingkungan Permukiman', inovator: 'Dr. Idawarni Asmal' },
                { nama_inovasi: 'Model Estimasi Konsumsi Bahan Bakar Kendaraan Ringan pada Jalan Tol', inovator: 'Dr. Eng. Ir. Muhammad Isran Ramli, ST, MT.' },
                { nama_inovasi: 'Pemecah Gelombang Sheetpile', inovator: 'Dr. Chairul Paotonan' },
                { nama_inovasi: 'Technology of Rain Water Harvesting', inovator: 'DR.Eng. Ir. Rita Tahir Lopa, MT. PU SDA' },
                { nama_inovasi: 'Groin Permeable Tiang', inovator: 'DR. Hasdinar Umar, ST., MT.' },
                { nama_inovasi: 'Technology of Ocean Wave Energy Converter', inovator: 'Dr. Ir. Luther Sule, MT.' },
                { nama_inovasi: 'ROV Survey', inovator: 'Ir. Rahimuddin, ST., MT., PhD' },
                { nama_inovasi: 'Aplikasi Sistem Cerdas Menentukan Peluang Terjadi Tubrukan Kapal', inovator: 'Ir. Rahimuddin, ST., MT., PhD' },
                { nama_inovasi: 'Model Prediksi Kebisingan Lalu Lintas Heterogen pada Jalan Perkotaan', inovator: 'Dr. Eng. Muralia Hustim' },
                { nama_inovasi: 'Model Mitigasi Kebisingan Lalu Lintas Heterogen pada Jalan Perkotaan', inovator: 'Dr. Eng. Muralia Hustim' },
                { nama_inovasi: 'Model Formula Rancangan Campuran Beraspal Berbasis Limbah Botol Plastik (Campuran Aspal Plastik)', inovator: 'Dr. Eng. Ir. Muhammad Isran Ramli, ST, MT.' },
                { nama_inovasi: 'Model Estimasi Emisi Kendaraan Ringan pada Kondisi Lalu Lintas Heterogen (MARNI Model)', inovator: 'Dr. Ir. Sumarni Hamid Aly, ST., MT.' },
                { nama_inovasi: 'Teknologi Mesin Press Pakan untuk Peningkatan Produktivitas Ternak Sapi', inovator: 'Fauzan, ST., MT., PhD' },
            ],
        };
    },
};
</script>
