<script setup lang="ts">
    import { useCoordinateStore } from '@/stores/coodinates';
import { useFigureStore } from '@/stores/figures';
import Dropdown from './Dropdown.vue';
    import RadioInput from './RadioInput.vue';
    const algoritmos = ['FloodFill', 'AnaliseGeometrica'];
    const figures = ['Selecione uma figura', 'Retangulo', 'Circunferencia', 'FigA', 'FigB'];
    const store = useCoordinateStore();
    const figure = useFigureStore();
</script>

<template>
    <header class="flex flex-col justify-around h-full">
        <Dropdown :options="figures" />
        <RadioInput v-if="figure.getFigure == 'Selecione uma figura'" placeholder="Selecione um algoritmo" :options="algoritmos" />
        <header class="flex flex-col items-center gap-4">
            <div class="flex gap-2">
                <label class="font-bold uppercase w-1/2">sx</label>
                <input v-model="store.$state.x1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>
            <div class="flex gap-2">
                <label class="font-bold uppercase w-1/2">sy</label>
                <input v-model="store.$state.y1" class="rounded-sm p-1 w-3/5" type="number" />
            </div>            
        </header>
    </header>
</template>