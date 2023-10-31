<script setup lang="ts">
    import Dropdown from './Dropdown.vue';
    const algoritmos = ['Analitico', 'DDA', 'Bresenham'];
</script>

<template>
    <header class="flex flex-col justify-around h-full">
        <Dropdown placeholder="Selecione um algoritmo" :options="algoritmos" />
        <header class="grid grid-cols-2 justify-items-center gap-4">
            <div class="flex gap-2">
                <label class="font-bold uppercase">x1</label>
                <input class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">y1</label>
                <input class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">x2</label>
                <input class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase">y2</label>
                <input class="rounded-sm p-1 w-3/5" type="number" />
            </div>
        </header>
    </header>
</template>