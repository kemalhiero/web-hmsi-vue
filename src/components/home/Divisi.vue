<script setup>
    import IntiIcon from '../icons/divisi/IconInti.vue';
    import InternalIcon from '../icons/divisi/IconInternal.vue';
    import PsdmIcon from '../icons/divisi/IconPsdm.vue';
    import EksternalIcon from '../icons/divisi/IconEksternal.vue';
    import MedkrafIcon from '../icons/divisi/IconMedkraf.vue';
    import PsiIcon from '../icons/divisi/IconPsi.vue';
    import BikrafIcon from '../icons/divisi/IconBikraf.vue';
    import RtkIcon from '../icons/divisi/IconRtk.vue';

    import DivisiItem from './DivisiItem.vue';
</script>

<template>
    <section class="text-center">
        <div class="pt-6 sm:pt-0 text-neutral-content">
            <h1 class="text-3xl sm:text-5xl font-bold">Divisi</h1>
            <p class="py-6">Divisi-divisi yang ada di HMSI Universitas Andalas</p>
        </div>

        <DivisiItem 
            div="inti"
            nama="Presidium Inti"
            ket="Terdiri dari Ketua umum, Wakil ketua umum, Sekretaris umum, serta Bendahara umum."
        >
            <template #icon>
                <IntiIcon />
            </template>
        </DivisiItem>
        
        <br>
        <DivisiItem 
            div="internal"
            nama="Internal"
            ket="Divisi yang bertugas untuk  membangun dan mempertahankan hubungan yang berlangsung di lingkungan HMSI, baik sesama pengurus, pengurus dengan anggota, dan sesama anggota, sekaligus juga mempererat dan menjaga kekeluargaan di HMSI."
        >
            <template #icon>
                <InternalIcon />
            </template>
        </DivisiItem>

        <DivisiItem 
            div="psdm"
            nama="Pengembangan Sumber daya Manusia"
            ket="Divisi yang mengoptimalkan dan memberdayakan seluruh potensi yang dimiliki anggota HMSI melalui kegiatan yang berkaitan dengan nonakademik, serta meningkatkan peran aktif mahasiswa SI dalam berbagai kegiatan."
        >
            <template #icon>
                <PsdmIcon />
            </template>
        </DivisiItem>

        <DivisiItem 
            div="eksternal"
            nama="Eksternal"
            ket="Bertanggung jawab dalam menjalin hubungan dan kerjasama dengan pihak eksternal melalui kegiatan-kegiatan yang berkaitan dengan akademik maupun non-akademik, serta meningkatkan peran aktif mahasiswa SI dalam berbagai kegiatan."
        >
            <template #icon>
                <EksternalIcon />
            </template>
        </DivisiItem>
        
        
        <br class="hidden lg:block">
        <DivisiItem 
            div="medkraf"
            nama="Media Kreatif"
            ket="Merupakan divisi yang bertugas untuk mengelola informasi dan mendokumentasikan kegiatan melalui berbagai media dengan kreatifitas sebagai sumber dayanya sehingga menciptakan solusi dalam ranah komunikasi visual"
        >
            <template #icon>
                <MedkrafIcon />
            </template>
        </DivisiItem>
        <DivisiItem 
            div="psi"
            nama="Pengembangan Skill dan Intelektual"
            ket="Divisi yang mewadahi mahasiswa dalam mengembangkan skill dan cara berpikir sebagai mahasiswa IT, dan memperkenalkan perkembangan IT serta prospek kerja saat ini kepada anggota HMSI"
        >
            <template #icon>
                <PsiIcon />
            </template>
        </DivisiItem>
        <DivisiItem 
            div="bikraf"
            nama="Bisnis Kreatif"
            ket="Divisi yang mengembangkan minat dan bakat mahasiswa dibidang kewirausahaan dengan mengedepankan segala aspek pertumbuhan perekonomian dalam bisnis kreatif melalui potensi ide dan sumber daya manusianya."
        >
            <template #icon>
                <BikrafIcon />
            </template>
        </DivisiItem>

        <br class="hidden lg:block">
        <DivisiItem 
            div="rtk"
            nama="Rumah Tangga dan Kesekretariatan"
            ket="Berperan dalam pengelolaan, penataan, serta pemeliharaan sekretariat HMSI Unand. Juga sebagai tim administrasi yang bertugas mengelola pengarsipan, surat menyurat, serta urusan administrasi lainnya."
        >
            <template #icon>
                <RtkIcon />
            </template>
        </DivisiItem>
    </section>
</template>