<template>
    <!-- tombol kontak bawah -->
    <div class="z-[100] fixed bottom-[20px] lg:bottom-[40px] left-[20px] lg:left-[40px]  w-200px h-50px bg-white rounded-full shadow-md" @click="icActive = !icActive">
        <span class="z-[100] bottom-[10px] left-[10px] shadow-md rounded-full absolute bg-white h-[50px] flex items-center align-middle text-[40px] text-primary duration-300 ease-in-out p-3 cursor-pointer" :class="{ activekontak: icActive }">+</span>
        <transition name="slide-fade">
            <ul v-show="icActive" class=" lg:max-w-max z-[100] absolute bottom-[55px]  min-w-[250px] p-[10px] rounded-md text-primary mb-4 bg-white shadow-sm ">
                <li class="text-center group opacity-50 cursor-pointer my-2 hover:opacity-100 hover:font-bold hover:text-green-600">
                    <a href=" https://api.whatsapp.com/send?phone=6282139859517&text=halo%20selamat%20siang%20saya%20tertarik%20dengan%20produk%20website%20bapak." target="_blank">
                    <i class="fa-brands fa-whatsapp mx-2" ></i> 
                    <span>Whats App</span>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-green-600 mx-4"></span>
                    </a>
                </li>
                <li class="text-center group opacity-50 cursor-pointer my-2 hover:opacity-100 hover:font-bold hover:text-red-600">
                    <a href="mailto:ilhamkurniawanjateng@gmail.com?subject=Permintaan%20Kerja%20Sama&body=Halo%2C%20selamat%20pagi%21%20Saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda. " target="_blank" >
                    <i class="fa-sharp fa-solid fa-envelope mx-2"></i>
                    <span>E-mail</span>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red-600 mx-4"></span>
                    </a>
                </li >
                <li class="text-center group opacity-50 cursor-pointer my-2 hover:opacity-100 hover:font-bold hover:text-purple-600">
                    <a href="https://www.instagram.com/ilhamkrnwan__" target="_blank">
                    <i class="fa-instagram fa-brands mx-2"></i>
                    <span>Instagram</span>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-600 mx-4"></span>
                    </a>
                </li>
                <li class="text-center group opacity-50 cursor-pointer my-2 hover:opacity-100 hover:font-bold hover:text-blue-600">
                    <a href="https://github.com/IlhamKurniawanBlora" target="_blank">
                    <i class="fa-github fa-brands mx-2"></i>
                    <span>Github</span>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-blue-600 mx-4"></span>
                    </a>
                </li>
            </ul>
        </transition>
    </div>

    <!-- <div class="fixed bottom-[40px] right-[40px] rounded-full bg-green-700">
        <a href="https://api.whatsapp.com/send?phone=6287734378825" >
            <i class="ri-whatsapp-line text-6xl text-center text-dark" ></i>
        </a>
    </div> -->
 
</template>

<script setup>
import { ref } from "vue";
const icActive = ref(false)
</script>

<style scoped>
.activekontak {
    transform: rotate(135deg);
 }
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>