<template>
    <!-- hero section -->
    <section class="mt-[50px] pb-5 bg-tersier">
        <div class="flex flex-wrap justify-center align-middle p-0 w-full h-screen mb-12 bg-fixed bg-center bg-cover custom"
            onload="lazy">
            <div class="self-center text-center">
                <h1 class="text-base text-dark font-semibold md:text-xl">
                    Halo, Saya
                    <span class="block text-white font-bold text-4xl lg:text-5xl mt-10">
                        lham Kurniawan
                    </span>
                </h1>
                <h2 class="font-medium text-primary text-lg mb-5 lg:text-2xl mt-5">
                    Fullstack Developer &
                    <span class=" text-dark">
                        Desainer Grafis
                    </span>
                </h2>
                <a href=" https://api.whatsapp.com/send?phone=6282139859517&text=halo%20selamat%20siang%20saya%20tertarik%20dengan%20produk%20website%20bapak."
                    class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mt-5">
                    hubungi saya
                </a>
            </div>
        </div>
    </section>
    <!-- end hero section -->

    <!-- start seection -->
    <section class="flex flex-wrap">
        <div class="w-full self-start px-4 lg:w-1/2">
            <div class="relative mt-10 lg:mt-0 lg:right-0">
                <img src="/ilustrasi/Personal-data-bro.svg" alt="coding ilustrasi" class="bg-transparent lg:w-[600px]">

            </div>
        </div>
        <div class="w-full self-center pl-5px lg:pl-[50px] lg:w-1/2">
            <h1 class="text-base text-primary font-semibold md:text-xl mb-5 mx-3 lg:mx-0">
                Halo, Saya Ilham Kurniawan
            </h1>
            <p class="text-sm text-primary opacity-90 mb-5 mx-3 lg:mx-0">
                Saya adalah seorang junior fullstack website developer dan junior desainer grafis,<br>
                Mampu memberikan solusi terbaik dan efisien atas masalah anda. <br>
                Selalu inovatif dan berkembang sesuai kebutuhan client.
            </p>
            <div class="inline mt-10 mx-6">
                <a href="https://drive.google.com/drive/folders/1DIZSW6CDT88vXf6E1xvcfErS56-zv3Sv?hl=id" target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 w-[200px] h-[50px] bg-transparent hover:border-green-500 hover:text-green-600 outline-none border-b-2 border-primary duration-300 ease-in-out  mr-5">Download
                    CV</a>
                <router-link :to="{ name: 'about' }">
                    <a href="http://"
                        class="px-4 py-2 w-[200px] h-[50px] bg-transparent hover:border-green-500 hover:text-green-600 outline-none border-b-2 border-primary duration-300 ease-in-out">About
                        me</a>
                </router-link>
            </div>
        </div>
    </section>
    <!-- end section -->

    <!-- start section -->
    <section class="flex items-center justify-center w-full h-screen mb-12 bg-fixed bg-center bg-cover custom mt-10">
        <div class="flex flex-wrap p-1 lg:p-5 text-white bg-primary bg-opacity-50 rounded-xl w-[90%] pb-10">
            <h1 class="text-base text-white font-semibold md:text-xl my-5 mx-6">
                Apa yang bisa saya bantu ?
            </h1>
            <div class="w-full mx-10 border-b-2 border-dark py-6 px-4 group cursor-pointer hover:border-green-500 ">
                01
                <span class="text-base lg:text-2xl text-black font-bold mx-10 opacity-70">
                    Landing Page
                </span>
                <span
                    class="text-base lg:text-2xl text-black font-bold mx-4 opacity-70 float-right group-hover:rotate-45 group-hover:text-green-500 ease-in duration-200 ">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
            <div class="w-full mx-10 border-b-2 border-dark py-6 px-4 group cursor-pointer hover:border-green-500 ">
                02
                <span class="text-base lg:text-2xl text-black font-bold mx-10 opacity-70">
                    Company Profile
                </span>
                <span
                    class="text-base lg:text-2xl text-black font-bold mx-4 opacity-70 float-right group-hover:rotate-45 group-hover:text-green-500 ease-in duration-200 ">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
            <div class="w-full mx-10 border-b-2 border-dark py-6 px-4 group cursor-pointer hover:border-green-500 ">
                03
                <span class="text-base lg:text-2xl text-black font-bold mx-10 opacity-70">
                    Logo Design
                </span>
                <span
                    class="text-base lg:text-2xl text-black font-bold mx-4 opacity-70 float-right group-hover:rotate-45 group-hover:text-green-500 ease-in duration-200 ">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
            <div class="w-full mx-10 border-b-2 border-dark py-6 px-4 group cursor-pointer hover:border-green-500 ">
                04
                <span class="text-base lg:text-2xl text-black font-bold mx-10 opacity-70">
                    Custom Design
                </span>
                <span
                    class="text-base lg:text-2xl text-black font-bold mx-4 opacity-70 float-right group-hover:rotate-45 group-hover:text-green-500 ease-in duration-200 ">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </section>
    <!-- end section -->
</template>

<script setup>

</script>

<style scoped>
.custom {
    background-image: url(/ilustrasi/bg-nature.jpg);
}

.inherit {
    max-width: inherit;
}
</style>