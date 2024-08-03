<script setup>
  import { RouterLink } from 'vue-router';
  import { initDrawers } from 'flowbite'
  import ListDivisi from '../data/divisi/ListDivisi.json'

  initDrawers()

</script>

<template>
  <nav class="navbar text-neutral-content sticky top-0 z-10 bg-[#23153c]">
    <div class="flex-1 px-2 lg:flex-none">
      <RouterLink to="/">
        <img src="../assets/img/logo-hmsi.png" class="w-24 sm:w-28 sm:mx-9 mx-0" />
      </RouterLink>
    </div> 
    <div class="flex justify-end flex-1 px-2">
      <div class="flex items-stretch">

          <ul class="hmsi menu menu-horizontal p-0 hidden sm:flex">
          <li>
            <RouterLink to="/isce">
              ISCE
            </RouterLink>
          </li>
            <li tabindex="0">
              <a>
                Tentang
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100 text-black rounded-box">
                <li><RouterLink to="/tentang">Tentang HMSI</RouterLink></li>
                <li><RouterLink to="/tentang/lambang">Arti Lambang</RouterLink></li>
                <li><RouterLink to="/tentang/alumni">Alumni</RouterLink></li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
                Divisi
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100 text-black rounded-box">
                <li v-for="divisi in ListDivisi">
                  <RouterLink :to="`/divisi/${divisi.slug}`">{{ divisi.nama }}</RouterLink>
                </li>
              </ul>
            </li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <!-- <li><a href="https://hmsiftiblog.wordpress.com" target="_blank">Blog</a></li> -->
          </ul>


        <label class="inline-grid px-2 sm:hidden" data-drawer-target="drawer-right-hmsi" data-drawer-show="drawer-right-hmsi" data-drawer-placement="right" aria-controls="drawer-right-hmsi">
              
          <!-- hamburger icon -->
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          
        </label>
      </div>
    </div>
  </nav>
</template>

