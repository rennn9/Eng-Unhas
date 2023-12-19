<template>
    <section class="blog-page-section spad pt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="post-item post-details">
              <div class="post-content">
                <p>
                  Manajemen Fakultas Teknik Universitas Hasanuddin juga membentuk panitia Pembina keselamatan dan kesehatan kerja (P2K3) dengan penjelasan sebagai berikut:
                </p>
  
                <div v-for="(item, index) in p2k3Data" :key="index">
                  <p>
                    <strong>{{ item.role }}</strong> : {{ item.name }}<br>
                    Sekretaris: {{ item.secretary }}<br>
                    Bidang-Bidang:
                    <ul>
                      <li v-for="(subitem, subindex) in item.fields" :key="subindex">
                        {{ subitem.name }}: {{ subitem.chairman }}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        p2k3Data: [
          {
            role: 'Penanggung Jawab/ Ketua',
            name: 'Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN.Eng',
            secretary: 'Dr.Eng. Ir. Ilham Bakri, ST., M.Sc., IPM., ASEAN Eng.',
            fields: [
              { name: 'Keselamatan, Tanggap Darurat & Investigasi Kecelakaan', chairman: 'Dr.Eng. Ilham Alimuddin, M.GIS' },
              { name: 'Kesehatan Kerja & P3K', chairman: 'Ir. Diniary Ikasari, ST., MT' },
              { name: 'Perlengkapan K3 & Safety Patrol', chairman: 'Dra. Rahmawita, M.M' },
            ],
          },
          // Tambahkan data lainnya sesuai kebutuhan
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Gaya tambahan jika diperlukan */
  </style>
  