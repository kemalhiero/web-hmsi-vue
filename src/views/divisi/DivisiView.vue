<script setup>
    import { ref, onMounted, readonly, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import DivItem from './DivItem.vue';
    // import Error404 from '../404.vue';

    const route = useRoute();
    const data = ref(null);
    // const dataNotFound = ref(false);

    // Peta nama divisi ke file JSON yang sesuai
    const divisiData = {
        bikraf: () => import('@/data/divisi/DivBikraf.json'),
        eksternal: () => import('@/data/divisi/DivEksternal.json'),
        internal: () => import('@/data/divisi/DivInternal.json'),
        medkraf: () => import('@/data/divisi/DivMedkraf.json'),
        psdm: () => import('@/data/divisi/DivPsdm.json'),
        psi: () => import('@/data/divisi/DivPsi.json'),
        rtk: () => import('@/data/divisi/DivRtk.json'),
        // tambahkan divisi lain di sini
    };

    const loadData = async (divisi) => {
    try {
        if (divisiData[divisi]) {
            const jsonData = await divisiData[divisi]();
            data.value = readonly(jsonData.default); // JSON data is under `default` property
        } else {
            throw new Error(`Data for divisi ${divisi} not found`);
        }
    } catch (error) {
        console.error(error);
    }
    };

    onMounted(() => {
        loadData(route.params.divisi);
    });

    watch(() => route.params.divisi, (newDivisi) => {
        loadData(newDivisi);
    });
</script>

<template>
    <div v-if="data">
      <DivItem
        :nama_lengkap="data.nama_lengkap"
        :slug="data.slug"
        :ket_divisi="data.ket_divisi"
        :visi="data.visi"
        :misi="data.misi"
        :staf_inti="data.staf_inti"
        :nama_staf="data.nama_staf"
        :proker="data.proker"
      />
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>
