<template>
    <header class="flex flex-col justify-around">
        <div class="flex flex-row gap-1">
            <button
            v-for="(_, tab) in tabs"
            :key="tab"
            :class="['p-2 w-1/2 bg-stone-950 hover:bg-stone-800', 'tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
            >
            {{ tab }}
            </button>
        </div>
        <div class="p-5 w-full h-5/6">
            <component :is="tabs[currentTab]" />
        </div>
        <button @click="desenha()" class="p-2 m-2 rounded-md text-black bg-green-500 hover:bg-green-600">Processar</button>
    </header>   
</template>

<script lang="ts">
    import { circulo_bresenham } from '@/assets/algoritmos/circle/circulo_bresenham';
import { circulo_parametrico } from '@/assets/algoritmos/circle/circulo_parametrico';
import { flood_fill } from '@/assets/algoritmos/fill/flood_fill';
import { linha_analitico } from '@/assets/algoritmos/line/linha_analitico';
import { linha_bresenham } from '@/assets/algoritmos/line/linha_bresenham';
import { linha_dda } from '@/assets/algoritmos/line/linha_dda';
import { useAlgorithmStore } from '@/stores/algorithm';
    import { useCanvasStore } from '@/stores/canvas';
import { useCoordinateStore } from '@/stores/coodinates';
    import { ref } from 'vue';
    import Circle from './Circle.vue';
    import Fill from './Fill.vue';
    import Line from './Line.vue';

    export default {
        setup() {
            const store = useCanvasStore();
            const coord = useCoordinateStore();
            const algo = useAlgorithmStore();
            const currentTab = ref<string>('Line');
            const tabs = {
                Line,
                Circle,
                Fill
            };
            return {
                store,
                coord,
                algo,
                currentTab,
                tabs
            }
        },
        methods: {
            desenha() {

                if (this.currentTab != 'Fill')
                    this.store.clear();
                
                if (this.currentTab == 'Line')
                {

                    if (this.algo.getAlgorithm == 'Analitico') 
                    {
                        linha_analitico({
                            setPixel: this.store.setPixel,
                            p1: this.coord.pointA,
                            p2: this.coord.pointB,
                        });
                    }
                    else if (this.algo.getAlgorithm == 'DDA') 
                    {                      
                        linha_dda({
                            setPixel: this.store.setPixel,
                            p1: this.coord.pointA,
                            p2: this.coord.pointB,
                        })
                    }
                    else if (this.algo.getAlgorithm == 'Bresenham') 
                    {
                        linha_bresenham({
                            setPixel: this.store.setPixel,
                            p1: this.coord.pointA,
                            p2: this.coord.pointB,
                        })
                    }
                }
                else if (this.currentTab == 'Circle')
                {
                    if (this.algo.getAlgorithm == 'Parametrico') 
                    {
                        circulo_parametrico({
                            setPixel: this.store.setPixel,
                            p1: this.coord.pointA,
                            raio: this.coord.pointB.x,
                        })
                    }
                    else if (this.algo.getAlgorithm == 'Bresenham')
                    {
                        circulo_bresenham({
                            setPixel: this.store.setPixel,
                            p1: this.coord.pointA,
                            raio: this.coord.pointB.x,
                        })
                    }
                }
                else if (this.currentTab == 'Fill')
                {
                    if (this.algo.getAlgorithm == 'Flood Fill')
                    {
                        flood_fill({
                            setPixel: this.store.setPixel,
                            seed: this.coord.pointA,
                        })
                    }
                }
                this.store.render();
            }
        }
    };
</script>