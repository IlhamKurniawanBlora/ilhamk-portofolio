<template>
    <!-- Navigasi Start -->
    <main>
        <header class="bg-tersier shadow-md absolute top-0 left-0 w-full flex items-center z-20">
            <div class="container">
                <div class="flex items-center justify-between relative">
                    <div class="px-4 group ">
                        <router-link :to="{ name: 'home' }">
                            <h3
                                class="font-bold text-lg text-primary block py-6 group-hover:-translate-y-2 transition-all ease-in-out duration-300">
                                Ilham Kurniawan</h3>
                        </router-link>
                    </div>
                    <div class="flex items-center px-4">
                        <button id="hamburger" @click="isActive = !isActive" name="hamburger" type="button"
                            class="block absolute right-4 lg:hidden" :class="{ hamburgeractive: isActive }">
                            <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                            <span class="hamburger-line transition duration-300 ease-in-out"></span>
                            <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>
                        <transition name="slide-fade">
                            <nav v-show="isActive" id="nav-menu"
                                class="font-mono absolute py-5 bg-white shadow-lg rounded-lg w-full right-[1px] top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                                <ul class="block lg:flex text-center">
                                    <li class="group ">
                                        <router-link :to="{ name: 'home' }">
                                            <p
                                                class="text-base transition duration-300 text-dark py-2 mx-8  group-hover:text-primary items-center justify-center align-middle">
                                                Beranda
                                                <span
                                                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                                            </p>
                                        </router-link>
                                    </li>
                                    <li class="group">
                                        <router-link :to="{ name: 'about' }">
                                            <p class="text-base text-dark py-2 mx-8 group-hover:text-primary">About
                                                <span
                                                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                                            </p>
                                        </router-link>
                                    </li>
                                    <li class="group">
                                        <router-link :to="{ name: 'fun' }">
                                            <p class="text-base text-dark py-2 mx-8 group-hover:text-primary">Fun Project
                                                <span
                                                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                                            </p>
                                        </router-link>
                                    </li>
                                    <li class="group">
                                        <router-link :to="{ name: 'kontak' }">
                                            <p class="text-base text-dark py-2 mx-8 group-hover:text-primary">Kontak
                                                <span
                                                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                                            </p>
                                        </router-link>
                                    </li>
                                </ul>
                            </nav>
                        </transition>
                    </div>
                </div>

            </div>
        </header>
    </main>
    <!-- Navigasi End -->
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(true);
</script>

<style scoped>
/* styling route link aktif */
a .route-link-active p span {
    max-width: full;
}

/* styling smooth navbar */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}</style>