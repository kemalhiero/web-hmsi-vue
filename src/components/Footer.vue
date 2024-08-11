<script setup>
    import { RouterLink } from 'vue-router'

    import { initDrawers } from 'flowbite'

    initDrawers()

    import TwitterIcon from './icons/medsos/IconTwitter.vue'
    import FacebookIcon from './icons/medsos/IconFacebook.vue'
    import YoutubeIcon from './icons/medsos/IconYoutube.vue'
    import InstagramIcon from './icons/medsos/IconInstagram.vue'

    import MenuIcon from './icons/IconMenu.vue'
    import CloseMenuIcon from './icons/IconCloseMenu.vue'
    import TentangIcon from './icons/IconTentang.vue'
    import VIcon from './icons/IconV.vue'
    import DivisiIcon from './icons/IconDivisi.vue'
    import BlogIcon from './icons/IconBlog.vue'
    import IsceIcon from './icons/IconIsce.vue'

    import ListDivisi from '@/data/divisi/ListDivisi.json'
    
</script>

<template>

    <div id="drawer-right-hmsi" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 sm:hidden" tabindex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500">
            <MenuIcon class="w-5 h-5 mr-2 fill-current" />
            Menu
        </h5>
        <button type="button" data-drawer-hide="drawer-right-hmsi" aria-controls="drawer-right-hmsi" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
            <CloseMenuIcon class="w-5 h-5" />
            <span class="sr-only">Tutup menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-tentang" data-collapse-toggle="dropdown-tentang">
                        <TentangIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Tentang</span>
                        <VIcon class="w-6 h-6 fill-current" />
                    </button>
                    <ul id="dropdown-tentang" class="hidden py-2 space-y-2">
                        <li>
                            <RouterLink to="/tentang" class="sub-dropdown" data-drawer-hide="drawer-right-hmsi">Tentang HMSI</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/tentang/lambang" class="sub-dropdown" data-drawer-hide="drawer-right-hmsi">Arti Lambang</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/tentang/alumni" class="sub-dropdown" data-drawer-hide="drawer-right-hmsi">Alumni</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-divisi" data-collapse-toggle="dropdown-divisi">
                        <DivisiIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Divisi</span>
                        <VIcon class="w-6 h-6 fill-current"/>
                    </button>
                    <ul id="dropdown-divisi" class="hidden py-2 space-y-2">
                        <li v-for="divisi in ListDivisi">
                            <RouterLink :to="`/divisi/${divisi.slug}`" class="sub-dropdown" data-drawer-hide="drawer-right-hmsi">{{ divisi.nama }}</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <!-- <a href="https://hmsiftiblog.wordpress.com" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"> -->
                    <RouterLink to="/blog" data-drawer-hide="drawer-right-hmsi" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <BlogIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Blog</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/isce" data-drawer-hide="drawer-right-hmsi" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <IsceIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">ISCE</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>

    <footer class="footer footer-center p-10 text-neutral-content overflow-visible">
        <div>
            <div class="grid grid-flow-col gap-4">
                <a href="https://twitter.com/HMSI_UNAND" target="_blank">
                    <TwitterIcon class="fill-current w-8 h-8"/>
                </a> 
                <a href="https://www.instagram.com/hmsi_unand/" target="_blank">
                    <InstagramIcon class="fill-current w-8 h-8"/>
                </a>
                <a href="https://www.facebook.com/hmsiunand" target="_blank">
                    <FacebookIcon class="fill-current w-8 h-8"/>
                </a>
                <a href="https://www.youtube.com/channel/UCccCJ7z5Cu9Nl6xDb0NiPaw" target="_blank">
                    <YoutubeIcon class="fill-current w-8 h-8"/>
                </a>
            </div>
        </div>
        <div class="text-lg">
            <p class="font-bold">HMSI - Universitas Andalas</p> 
            <p>Copyright © 2023 - All right reserved</p>
        </div>
        <br>
    </footer>
  
</template>

<style scoped lang="postcss">
    .sub-dropdown {
        @apply flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100;
    }
</style>