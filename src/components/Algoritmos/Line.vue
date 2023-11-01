<script setup lang="ts">
    import { useCoordinateStore } from '@/stores/coodinates';
    import RadioInput from './RadioInput.vue';
    const algoritmos = ['Analitico', 'DDA', 'Bresenham'];
    const store = useCoordinateStore();
</script>

<template>
    <header class="flex flex-col justify-around h-full">
        <RadioInput placeholder="Selecione um algoritmo" :options="algoritmos" />
        <header class="grid grid-cols-2 justify-items-center gap-4">
            <div class="flex gap-2">
                <label class="font-bold uppercase">x1</label>
                <input v-model="store.$state.x1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">y1</label>
                <input v-model="store.$state.y1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">x2</label>
                <input v-model="store.$state.x2" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">y2</label>
                <input v-model="store.$state.y2" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
        </header>
    </header>
</template>