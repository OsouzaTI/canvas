<template>
    <header class="flex flex-col w-3/4 md:flex-row gap-2  ">
        <canvas id="canvas" :width="store.width" :height="store.height" class="bg-neutral-800 p-2 mb-2 w-full h-full shadow-md"></canvas>
        <section class="w-full md:w-1/2 flex flex-col gap-2 justify-center">
            <!-- <PixelConfiguration class="border border-1 rounded-md p-1 h-1/2" /> -->
            <div class="w-full md:w-1/2 flex flex-col gap-2 justify-center">
                <button @click="store.aumentarPixels()">Aumentar</button>
            </div>
            <Tab class="border border-1 rounded-md p-1 h-4/5" />
        </section>
    </header>
</template>

<script lang="ts">
    
    import { useCanvasStore } from '@/stores/canvas';
    import PixelConfiguration from './Algoritmos/PixelConfiguration.vue';
    import Tab from './Algoritmos/Tab.vue';

    export default {
        setup() {
            const store = useCanvasStore();
            return {
                store
            }
        },
        mounted: function () {
            this.store.load();
        },
        methods: {
            
        }
    }

</script>