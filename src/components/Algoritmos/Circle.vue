<script setup lang="ts">
    import { useCoordinateStore } from '@/stores/coodinates';
    import Dropdown from './Dropdown.vue';
    const algoritmos = ['Parametrico', 'Bresenham'];
    const store = useCoordinateStore();
</script>

<template>
    <header class="flex flex-col justify-around h-full">
        <Dropdown placeholder="Selecione um algoritmo" :options="algoritmos" />
        <header class="flex flex-col items-center gap-4">
            <div class="flex gap-2">
                <label class="font-bold uppercase w-1/2">xc</label>
                <input v-model="store.$state.x1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase w-1/2">yc</label>
                <input v-model="store.$state.y1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase w-1/2">raio</label>
                <input v-model="store.$state.x2" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
        </header>
    </header>
</template>