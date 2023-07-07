<template>
  <section id="kontak" class="kontak pb-20 bg-tersier">
    <div class="flex flex-wrap bg-gradient-to-b from-primary pt-36 w-full">
      <div class="w-full self-center pl-[20px] lg:pl-[50px] lg:w-1/2">
        <h1 class="text-base text-primary font-semibold md:text-xl">
          Hello Guys, Saya
          <span class="block text-dark font-bold text-4xl mt-1 lg:text-5xl">
            Ilham Kurniawan
          </span>
        </h1>
        <h2 class="font-medium text-primary text-lg mt-5 lg:text-2xl">
          Seorang
          <span class="text-dark typed-text">{{ typeValue }}</span>
          <span
            class="cursor inline-block ml-[3px] w-[4px] bg-black duration-100"
            :class="{ typing: typeStatus }"
            >&nbsp;</span
          >
        </h2>

        <p class="font-medium text-primary mt-2 mb-10 leading-relaxed">
          hubungi saya melalui berbagai media sosial :
        </p>
        <div
          class="flex justify-center items-center max-w-100 px-4 lg:justify-start"
        >
          <div class="self-between lg:self-center mx-5 md:mx-[30px]">
            <a
              href=" https://api.whatsapp.com/send?phone=6282139859517&text=halo%20selamat%20siang%20saya%20tertarik%20dengan%20produk%20website%20bapak." target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center group"
            >
              <img
                src="/sosmed/WhatsApp.svg.png"
                alt="whatsapp"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
            <a
              href=" https://https://facebook.com/profile.php?100024996105516" target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center"
            >
              <img
                src="/sosmed/Facebook.svg.png"
                alt="Facebook"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
          </div>
          <div class="self-between lg:self-center mx-5 md:mx-[30px]">
            <a
              href="https://github.com/IlhamKurniawanBlora" target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center"
            >
              <img
                src="/sosmed/github.svg.png"
                alt="github"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
            <a
              href=" https://instagram.com/ilhamkrnwan__" target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center"
            >
              <img
                src="/sosmed/Instagram.svg.png"
                alt="Instagram"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
          </div>
          <div class="self-between lg:self-center mx-5 md:mx-[30px]">
            <a
              href="https://www.youtube.com/channel/UC0KDd6bsXi3Pk6LReOOG5Xw" target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center"
            >
              <img
                src="/sosmed/YouTube.svg.png"
                alt="youtube"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
            <a
              href=" https://" target="_blank"
              class="py-[3px] px-[3px] m-1 justify-self-center"
            >
              <img
                src="/sosmed/tiktok.png"
                alt="tiktok"
                class="w-[70px] h-auto self-center justify-center hover:scale-110 hover:-translate-y-2 ease in duration-300"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="w-full self-end px-4 lg:w-1/2">
        <div class="relative mt-10 lg:mt-0 lg:right-0">
          <img
            src="/ilustrasi/Coding-bro.svg"
            alt="coding ilustrasi"
            class="bg-transparent lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "FullStack Developer",
        "Grafis Desainer",
        "Freelancer",
        "Pemain Mobile Legends",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style>
.cursor {
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
