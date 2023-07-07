<template>
  <!-- start section -->
  <section class="pb-20 pt-36 bg-tersier font-mono">
    <div class="w-full relative mt-2">
      <h3 class="text-4xl text-primary text-center">Ilham Kurniawan</h3>
    </div>
  </section>
  <!-- end section -->
  <!-- start section -->
  <section class="font-mono">
    <div class="flex flex-wrap">
      <div class="w-full px-4 lg:w-1/2">
        <div class="mt-10">
          <img src="/ilustrasi/Website-Creator-bro.svg" alt="coding ilustrasi" class="bg-transparent lg:w-[600px]" />
        </div>
      </div>
      <div class="w-full px-6 lg:w-1/2 grid">
        <div class="mt-4 text-2xl text-primary ml-3 underline-offset-4 underline">
          <h2>Fullstack Web Developer</h2>
        </div>
        <p class="mt-2">
          Halo, nama saya <strong>Ilham Kurniawan</strong>, seorang junior
          fullstack web developer yang sedang bersemangat memulai karir di dunia
          pengembangan web. Saya percaya bahwa web development adalah medan yang
          menarik dan terus berkembang, dan saya sangat antusias untuk menjadi
          bagian dari komunitas ini.
        </p>
        <transition>
          <div v-show="TampilkanAboutMe">
            <p class="mt-2">
              Meskipun saya masih di awal karir saya, saya telah menunjukkan
              minat yang kuat dalam dunia teknologi dan telah meluangkan waktu
              untuk memperoleh pengetahuan dan keterampilan yang diperlukan
              untuk menjadi seorang fullstack web developer. Saya memiliki
              pemahaman yang baik tentang HTML, CSS, dan JavaScript sebagai
              fondasi utama dalam pengembangan web. Selain itu, saya juga
              memiliki pengetahuan tentang kerangka kerja seperti Vue.js dan
              Node.js.
            </p>
            <p class="mt-2">
              Saya sangat berharap untuk mendapatkan kesempatan untuk belajar
              dan tumbuh bersama tim yang berpengalaman dalam perusahaan ini.
              Saya siap menghadapi tantangan dan berkontribusi secara positif
              dalam pengembangan proyek-proyek yang menarik. Saya juga sangat
              antusias untuk terus meningkatkan keterampilan saya dan menjadi
              seorang profesional web developer yang handal.
            </p>
            <p class="mt-2">
              Terima kasih telah meluangkan waktu untuk membaca "About" saya.
              Saya berharap dapat bertemu dengan Anda dan membahas lebih lanjut
              tentang bagaimana saya dapat berkontribusi dalam tim Anda.
            </p>
          </div>
        </transition>
        <a @click="TampilkanLebihBanyak = !TampilkanLebihBanyak" class="cursor-pointer font-bold underline">
          <p v-if="TampilkanLebihBanyak" @click="TampilkanAboutMe = !TampilkanAboutMe">
            Tampilkan Lebih Banyak ...
          </p>
          <p v-else @click="TampilkanAboutMe = !TampilkanAboutMe">
            Tampilkan Lebih Sedikit...
          </p>
        </a>
      </div>
    </div>
  </section>
  <!-- end section -->
  <!-- start section -->
  <section class="font-mono">
    <div class="flex flex-wrap justify-center mx-4 mt-5 rounded-3xl py-6">
      <div class="w-full relative px-3">
        <h2 class="font-mono text-slate-600 text-center text-3xl lg:text-2xl">
          Tech Stack
        </h2>
        <div class="flex flex-wrap justify-center mt-6 container px-3 lg:w-600px">
              <img src="/tech/html.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/css.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/js.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/sass.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/tailwind.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/vue.png" alt="" class="w-[70px] mx-3 my-2" />
              <img src="/tech/php.png" alt="" class="h-[50px] mx-3 my-2" />
              <img src="/tech/sql.png" alt="" class="h-[50px] mx-3 my-2" />
              <img src="/tech/laravel.png" alt="" class="h-[50px] mx-3 my-2" />
              <img src="/tech/node.png" alt="" class="h-[50px] mx-3 my-2" />
              <img src="/tech/git.png" alt="" class="w-[150px] mx-3 my-2" />
        </div>
      </div>


    </div>
  </section>
  <!-- end section -->
  <!-- start section -->
  <section class="font-mono">
    <div class="flex flex-wrap">
      <div class="w-full px-6 lg:w-1/2 grid">
        <div class="mt-4 text-2xl text-primary ml-6 underline-offset-4 underline">
          <h2>Pendidikan</h2>
        </div>
        <div class="mx-6">
          <ul class="list-disc">
            <li>
              <h2 class="mt-4 text-2xl text-primary ml-6 font-bold">
                Formal
              </h2>
              <ul class="list-decimal mx-6">
                <li>
                  <h3 class="text-xl text-primary opacity-90">
                    SMAN 1 RANDUBLATUNG (MIPA)
                  </h3>
                  <p class="italic text-base text-primary opacity-80">2017 - 2020</p>
                </li>
              </ul>
            </li>
            <li>
              <h2 class="mt-4 text-2xl text-primary ml-6 font-bold">
                Non Formal
              </h2>
              <ul class="list-decimal mx-6">
                <li>
                  <h3 class="text-xl text-primary opacity-90">
                    RGI Al- Azhar Jawa Timur (Surabaya)
                  </h3>
                  <p class="italic text-base text-primary opacity-80">2021</p>
                  <p class="text-base text-primary opacity-80">
                    - Pelatihan RPL / Web Developer
                  </p>
                </li>
                <li>
                  <h3 class="text-xl text-primary opacity-90">
                    Pelatihan DINPERINAKER (Blora)
                  </h3>
                  <p class="italic text-base text-primary opacity-80">2022</p>
                  <p class="text-base text-primary opacity-80">
                    - Pelatihan Desain Grafis 
                  </p>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2">
        <div class="mt-10">
          <img src="/ilustrasi/School-bro.svg" alt="coding ilustrasi" class="bg-transparent lg:w-[600px]" />
        </div>
      </div>


    </div>
  </section>
  <!-- end section -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
const TampilkanAboutMe = ref(false);
const TampilkanLebihBanyak = ref(true);
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.custom {
  background-image: url(/ilustrasi/bg-nature.jpg);
}
</style>
