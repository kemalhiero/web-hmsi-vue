<template>
    <main class="px-4">
        <section v-for="(yearData, index) in dataPengurus" :key="`section-${yearData.tahun}-${index}`">
            <div class="text-center py-6">
                <p class="text-3xl sm:text-5xl py-1 text-white blog-tebal">{{ yearData.tahun }}</p>
            </div>
            <center><hr class="w-7/12 xl:w-5/12 2xl:w-1/4 my-2"></center>
            <div class="text-center mt-6 mb-10">
                <div class="inline-block m-2 card max-w-sm min-w-min bg-base-100 sm:hover:-translate-y-1 duration-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title font-bold justify-center">Presidium Inti</h2>
                        <p v-for="(member, index) in yearData.pengurus.inti" :key="`inti-${yearData.tahun}-${index}`"><b>{{ member.jabatan }}</b> : {{ member.nama }}</p>
                    </div>
                </div>
                <br>
                <div 
                    v-for="row in getDivisiRows(yearData.pengurus.divisi)" 
                    :key="row[0].nama" 
                    class="flex justify-center flex-wrap"
                >
                    <div 
                        class="inline-block m-2 card w-full sm:max-w-sm sm:w-auto min-w-min bg-base-100 sm:hover:-translate-y-1 duration-100 shadow-xl" 
                        v-for="divisi in row" 
                        :key="divisi.nama">
                        <div class="card-body">
                            <h2 class="card-title font-bold justify-center">Divisi {{ divisi.nama }}</h2>
                            <p><b>Kepala Divisi</b> : {{ divisi.kepala }}</p>
                            <p v-if="divisi.sekre"><b>Sekretaris Divisi</b> : {{ divisi.sekre }}</p>
                            <p v-if="divisi.bendahara"><b>Bendahara Divisi</b> : {{ divisi.bendahara }}</p>
                            <p><b>Anggota</b> :</p>
                            <ul>
                                <li v-for="(anggota, index) in divisi.anggota" :key="`anggota-${divisi.nama}-${yearData.tahun}-${index}`">{{ anggota }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

    import data2017 from '@/data/alumni/2017.json';
    import data2018 from '@/data/alumni/2018.json';
    import data2019 from '@/data/alumni/2019.json';
    import data2020 from '@/data/alumni/2020.json';
    import data2021 from '@/data/alumni/2021.json';
    import data2022 from '@/data/alumni/2022.json';

    const dataPengurus = [  //urutan tahun yang tampil
        data2022,
        data2021,
        data2020,
        data2019,
        data2018,
        data2017,
    ]

    const getDivisiRows = (divisi) => {
        const rows = [];
        const middle = Math.ceil(divisi.length / 2);

        if (divisi.length === 4) {
            rows.push(divisi.slice(0, middle));
            rows.push(divisi.slice(middle));
        } else if (divisi.length === 5) {
            rows.push(divisi.slice(0, 2));
            rows.push(divisi.slice(2));
        } else if (divisi.length === 6) {
            rows.push(divisi.slice(0, 3));
            rows.push(divisi.slice(3));
        }

        return rows;
    };

</script>