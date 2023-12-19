<template>
    <Header class="flex mb-0"></Header>
    <div id="row-container" class="flex flex-row justify-between mx-[273px] my-[100px]">

        <!-- Berita -->
        <div id="berita" class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-[3rem] relative">
            <div id="card1" class="w-[360px] flex flex-col justify-self-center">
                <img class="flex justify-self-center object-cover h-[250px] w-[360px]"
                    src="@/assets/img/dharma_wanita (1).jpeg" alt="">
                <span class="flex font-bold">Pelantikan Pengurus Dharma Wanita FTUH 2022/2026</span>
                <div id="date-and-publisher" class="flex flex-row gap-[10px]">
                    <span class="text-gray-600">21 Juli 2022</span>
                    <span class="text-gray-600">Admin Fakultas</span>
                </div>
                <span>Gowa, 21 Juli 2022 - Pelantikan Pengurus Dharma Wanita Fakultas Teknik Universi...</span>
            </div>
        </div>

        <!-- Berita Terbaru -->
        <div>
            <div id="Judul" class="flex justify-center font-bold text-3xl bg-gray-200 w-[400px] py-[15px] mb-[20px]">
                Berita Terbaru
            </div>
            <div id="card1" class="w-[360px] flex flex-row gap-[20px]">
                <img class="flex self-center object-cover h-[50px] w-[50px]"
                    src="@/assets/img/dharma_wanita (1).jpeg" alt="">
                <div id="informasi-berita" class="flex flex-col justify-self-center">
                    <span class="flex font-bold ">Pelantikan Pengurus Dharma Wanita FTUH 2022/2026</span>
                    <span class="text-gray-600">21 Juli 2022</span>
                </div>    
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>