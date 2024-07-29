<script setup>
    import { RouterLink } from 'vue-router'

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
    
</script>

<template>
    <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 sm:hidden" tabindex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500">
            <MenuIcon />
            Menu
        </h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
            <CloseMenuIcon />
        <span class="sr-only">Tutup menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-tentang" data-collapse-toggle="dropdown-tentang">
                        <TentangIcon />
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Tentang</span>
                        <VIcon />
                    </button>
                    <ul id="dropdown-tentang" class="hidden py-2 space-y-2">
                    <li>
                        <RouterLink to="/tentang" class="sub-dropdown">Tentang HMSI</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tentang/lambang" class="sub-dropdown">Arti Lambang</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tentang/alumni" class="sub-dropdown">Alumni</RouterLink>
                    </li>
                    </ul>
                </li>
                <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-divisi" data-collapse-toggle="dropdown-divisi">
                        <DivisiIcon />
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Divisi</span>
                        <VIcon />
                    </button>
                    <ul id="dropdown-divisi" class="hidden py-2 space-y-2">
                    <li>
                        <RouterLink to="/divisi/inti" class="sub-dropdown">Inti</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/psdm" class="sub-dropdown">PSDM</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/internal" class="sub-dropdown">Internal</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/eksternal" class="sub-dropdown">Eksternal</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/bikraf" class="sub-dropdown">Bisnis Kreatif</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/psi" class="sub-dropdown">PSI</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/rtk" class="sub-dropdown">RTK</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/divisi/medkraf" class="sub-dropdown">Media Kreatif</RouterLink>
                    </li>
                    </ul>
                </li>
                <li>
                    <!-- <a href="https://hmsiftiblog.wordpress.com" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"> -->
                    <RouterLink to="/blog" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <BlogIcon />
                    <span class="flex-1 ml-3 whitespace-nowrap">Blog</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/isce" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <IsceIcon />
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
            <TwitterIcon />
        </a> 
        <a href="https://www.instagram.com/hmsi_unand/" target="_blank">
            <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/hmsiunand" target="_blank">
            <FacebookIcon />
        </a>
        <a href="https://www.youtube.com/channel/UCccCJ7z5Cu9Nl6xDb0NiPaw" target="_blank">
            <YoutubeIcon />
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