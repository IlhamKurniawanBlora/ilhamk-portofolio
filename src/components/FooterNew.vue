
<template>
    <footer>
        <div class="container mt-10 px-4 lg:px-20">
            <div class="w-full relative border-transparent pb-3 border-b-dark px-3 lg:px-10 border-[3px] mb-10 lg:mb-20">
                <h2 class="font-mono text-slate-600 text-center text-3xl lg:text-2xl">
                    <strong>Mari Berbincang:</strong>
                </h2>                   
            </div>
            <div class="flex flex-wrap">
                <div class="w-full pl-[20px] lg:pl-[50px] lg:w-2/3">
                    <h3 class="text-2xl text-slate-600">
                        Kritik & Saran<span class="text-6xl text-green-700">.</span> 
                    </h3>
                    <div class="form pr-6 mt-10 font-mono">
                            <input type="text" name="nama" class="w-full h-[50px] bg-transparent border-b-2 border-primary mb-3 outline-none p-3 focus:border-3 focus:border-green-500 " autocomplete="off" placeholder="Masukan Nama">
                            <input type="email" name="email" id="" class="w-full h-[50px] bg-transparent border-b-2 border-primary p-3 mb-3 outline-none focus:border-3 focus:border-green-500" autocomplete="off" placeholder="Masukan Email">
                            <textarea name="kritiksaran" id="" cols="5" rows="10" class="outline-none w-full bg-transparent border-b-2 border-primary mb-3 px-3 py-5 focus:border-3 focus:border-green-500" autocomplete="off" placeholder="Masukan Kritik dan Saran"></textarea>
                            <input type="button" class="px-4 py-2 w-[200px] h-[50px] bg-transparent hover:border-green-500 hover:border-b-3 outline-none border-b-2 border-primary duration-300 ease-in-out font-bold hover:text-green-500 " value="Kirim Pesan">
                    </div>
                </div>
                <div class="w-full pl-[20px] lg:pl-[50px] lg:w-1/3 ">
                    <h3 class="text-2xl text-slate-600 mb-4">
                        Hubungi Saya<span class="text-6xl text-green-700">.</span>
                    </h3>
                    <ul class="text-primary font-sans mt-10">
                        <li class="list-none mb-6 cursor-pointer group hover:text-dark">
                            <span class="text-green-700 uppercase">
                                Email
                            </span>
                            <p>
                                <span class="mx-2">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                ilhamkurniawanjateng@gmail.com
                            </p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                        </li>
                        <li class="list-none mb-6 cursor-pointer group hover:text-dark">
                            <span class="text-green-700 uppercase">
                                whatsapp
                            </span>
                            <p>
                                <span class="mx-2">
                                    <i class="fa-brands fa-whatsapp"></i>                                
                                </span>
                                <span class="text-green-700 opacity-90">
                                    +62
                                </span>
                                821 3985 9517
                            </p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                        </li>
                        <li class="list-none mb-6 cursor-pointer group hover:text-dark">
                            <span class="text-green-700 uppercase">
                                Telepon
                            </span>
                            <p>
                                <span class="mx-2">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <span class="text-green-700 opacity-90">
                                    +62
                                </span>
                                877 3437 8825
                            </p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                        </li>
                       
                        <li class="list-none mb-6 cursor-pointer group hover:text-dark">
                            <span class="text-green-700 uppercase">
                                Alamat
                            </span>
                            <p>
                                <span class="mx-2">
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                Kedungtuban, Blora, Jawa Tengah, Indonesia
                            </p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full relative pt-3 pb-20 mt-20 border-transparent border-2 border-y-secondary px-3 ">
                <h3 class="text-sm text-primary font-mono text-center">
                    Copyright © {{ new Date().getFullYear() }} Ilham Kurniawan | K A I R A V. All Right Reserved
                </h3>
               
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

</style>