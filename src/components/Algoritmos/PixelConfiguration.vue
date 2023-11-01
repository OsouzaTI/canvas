<script setup lang="ts">
    import { useCanvasStore } from '@/stores/canvas';
    const store = useCanvasStore();
</script>

<template>
    <header class="flex flex-col items-start justify-center gap-2">
        <div>
            <label class="font-bold">Tamanho do pixel: </label>
            <input @change="store.load()" v-model="store.$state.canvasPixels" type="number" min="2" step="2" class="text-black rounded-sm p-1 w-20" />
        </div>
    </header>
</template>