<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        div: {
            type: String,
            required: true
        },
        nama: {
            type: String,
            required: true
        },
        ket: {
            type: String,
            required: true
        },

    })
</script>

<template>
    <RouterLink :to="`/divisi/${div}`">
        <div class="inline-block m-2 card max-w-xs min-w-min bg-base-100 sm:hover:scale-105 duration-100 shadow-xl">
        <figure>
            <slot name="icon"></slot>
        </figure>
        <div class="card-body">
            <h2 class="card-title justify-center">{{nama}}</h2>
            <p>{{ ket }}</p>
        </div>
        </div> 
    </RouterLink>
</template>