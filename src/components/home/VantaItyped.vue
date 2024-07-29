<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import GLOBE from 'vanta/dist/vanta.globe.min';
import { init as itypedInit } from 'ityped';
import * as THREE from 'three';

const vantaEffect = ref(null);

onMounted(() => {
  if (window.innerWidth > 640) {
    vantaEffect.value = GLOBE({
      el: '#vanta-globe-hero',
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 400.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 0.30,
      color: 0xffb737
    });

    itypedInit("#ityped", {
      strings: [
        "Selamat Datang",
        "Salamaik Datang",
        "Saleum Teuka",
        "Wilujeng Sumping",
        "꧋ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉",
        "Horas!",
        "Welcome",
        "Willkommen",
        "أهلا وسهلا",
        "いらっしゃいませ",
        "환영해",
        "欢迎",
      ],
      typeSpeed: 100,
      startDelay: 200,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      cursorChar: "_",
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect.value) vantaEffect.value.destroy();
});
</script>

<template>
  <!-- untuk layar laptop -->
  <div class="px-6 py-32 sm:px-16 sm:py-56 lg:pl-28 xl:pl-48 2xl:pl-72 hidden sm:block" id="vanta-globe-hero">
    <span id="ityped" class="ityped hmsi text-4xl sm:text-6xl text-white"></span>
  </div>

  <!-- untuk layar HP -->
  <div class="hero min-h-screen sm:hidden" style="background-image: url(/src/assets/img/pengurus/smwahh.jpg);">
    <div class="hero-overlay bg-opacity-80"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <img src="../../assets/img/logo-hmsi.png" alt="logo-hmsi" class="h-36 mx-auto">
        <h1 class="mb-5 text-4xl font-bold">Selamat Datang!</h1>
        <p class="mb-48">di situs web resmi<br>Himpunan Mahasiswa Sistem Informasi<br>Universitas Andalas</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* ityped */

  .ityped-cursor {
      font-size: 2.2rem;
      opacity: 1;
      -webkit-animation: blink 0.3s infinite;
      -moz-animation: blink 0.3s infinite;
      animation: blink 0.3s infinite;
      animation-direction: alternate;
      color: white;
  }

  @keyframes blink {
      100% {
          opacity: 0;
      }
  }

  @-webkit-keyframes blink {
      100% {
          opacity: 0;
      }
  }

  @-moz-keyframes blink {
      100% {
          opacity: 0;
      }
  }
</style>

