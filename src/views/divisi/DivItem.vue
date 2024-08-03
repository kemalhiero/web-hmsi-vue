<script setup>
    import { onMounted } from 'vue'
    import { initAccordions } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initAccordions();
    })

    defineProps({
        nama_lengkap: String,
        slug: String,
        ket_divisi: String,
        visi: String,
        misi: Array,
        staf_inti: Array,
        nama_staf: Array,
        proker: Array,
    })

    import VDivisiIcon from '../../components/icons/IconVDivisi.vue';

</script>

<template>
     
    <section class="text-center py-6">
        <p class="hmsi text-4xl sm:text-6xl text-white">Divisi {{ nama_lengkap }}</p>
    </section>

    <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row px-5 sm:px-16 2xl:px-0">
            <div class="flex justify-center">
                <img :src="`/src/assets/img/pengurus/${slug}/${slug}.jpg`" :alt="`divisi ${slug}`" class="max-w-xs rounded-lg shadow-2xl sm:hover:-translate-y-2 duration-100" loading="lazy"/>
            </div>
            <div class=" text-neutral-content px-3 max-w-full text-center lg:text-left">
                <p class="text-lg sm:text-xl font-bold">Apa itu divisi {{nama_lengkap}}?</p>
                <p class="py-3 text-justify indent-4 sm:text-lg">{{ ket_divisi }}</p>
                <p class="text-lg sm:text-xl font-bold">Visi:</p>
                <p class="py-3 text-justify indent-4 sm:text-lg">{{ visi }}</p>
                <p class="text-lg sm:text-xl font-bold">Misi:</p>
                <ol class="list-decimal list-inside py-3 sm:text-lg">
                    <li v-for="(item, index) in misi" :key="index">{{item}}</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="flex flex-wrap justify-evenly pb-6">
        <div v-for="(itemstaf, index) in staf_inti" :key="index" class="inline-block m-2 card lg:w-72 max-w-xs bg-base-100 shadow-xl text-center sm:hover:-translate-y-2 duration-100">
            <figure>
                <img :src="`/src/assets/img/pengurus/${slug}/${itemstaf.slug}-${slug}.jpg`" :alt="`${itemstaf.slug} ${slug}`" class="max-h-min" loading="lazy">
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-center">{{ itemstaf.nama }}</h2>
                <p>{{ itemstaf.jabatan }}</p>
            </div>
        </div>
    </div>

    <section class="text-center py-6">
        <p class="hmsi text-2xl sm:text-4xl text-white pb-4">Staf</p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-evenly text-neutral-content">
            <ol v-for="(kolom, index) in nama_staf" :key="index" class="list-none text-lg sm:text-xl">
                <li v-for="(item, index) in kolom" :key="index">{{ item }}</li>
            </ol>
        </div>
    </section>

    <section class="text-center py-6 px-10">
        <p class="hmsi text-2xl sm:text-4xl text-white pb-4">Program Kerja</p>
        <center>
            <div id="accordion-collapse" data-accordion="collapse" class="max-w-4xl">
                <div v-for="(item, index) in proker" :key="index">
                    <h2 :id="`accordion-${index}-heading`">
                        <button type="button" 
                            class="flex items-center justify-between w-full p-5 font-medium text-left text-black hover:bg-gray-100 bg-white" 
                            :class="{ 'rounded-t-xl': index === 0, 'rounded-b-xl focus:rounded-b-none': index === proker.length - 1 }" 
                            :data-accordion-target="`#accordion-${index}-body`" 
                            aria-expanded="false" 
                            :aria-controls="`accordion-${index}-body`
                        ">
                            <span class="text-black">{{ item.heading_proker }}</span>
                            <VDivisiIcon />
                        </button>
                    </h2>
                    <div :id="`accordion-${index}-body`" class="hidden" :aria-labelledby="`accordion-${index}-heading`">
                        <div class="p-5 bg-base-100 text-left" :class="{'rounded-b-xl': index === proker.length - 1}">
                            <p class="mb-2 font-bold">Latar belakang</p>
                            <p>{{ item.isi_proker.latar_belakang }}</p>
                            <p class="font-bold mt-2">Bentuk Kegiatan</p>
                            <p v-if="item.isi_proker.bentuk_kegiatan.length == 1">{{ item.isi_proker.bentuk_kegiatan[0] }}</p>
                            <ol v-else class="list-decimal list-inside">
                                <li v-for="(itemkgt, index) in item.isi_proker.bentuk_kegiatan" :key="index">{{ itemkgt }}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    </section>

</template>