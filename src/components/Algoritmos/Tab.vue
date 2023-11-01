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
import analise_geometrica from '@/assets/algoritmos/fill/analise_geometrica';
    import { flood_fill } from '@/assets/algoritmos/fill/flood_fill';
import { figA, figB } from '@/assets/algoritmos/forms';
    import { linha_analitico } from '@/assets/algoritmos/line/linha_analitico';
    import { linha_bresenham } from '@/assets/algoritmos/line/linha_bresenham';
    import { linha_dda } from '@/assets/algoritmos/line/linha_dda';
import { Colors } from '@/Constants/Colors';
    import { useAlgorithmStore } from '@/stores/algorithm';
    import { useCanvasStore } from '@/stores/canvas';
    import { useCoordinateStore } from '@/stores/coodinates';
import { useFigureStore } from '@/stores/figures';
    import type { Algorithms } from '@/types/Algorithms';
import { Point2D } from '@/types/Point2D';
    import { ref } from 'vue';
    import Circle from './Circle.vue';
    import Fill from './Fill.vue';
    import Line from './Line.vue';

    export default {
        data() {
            return {
                gridx: 0,
                gridy: 0,
            }
        },
        setup() {
            const store = useCanvasStore();
            const coord = useCoordinateStore();
            const algo = useAlgorithmStore();
            const fig = useFigureStore();
            const currentTab = ref<string>('Line');
            const tabs = {
                Line,
                Circle,
                Fill
            };

            // Objeto 
            const renderFunctions : Algorithms = {
                Line: {
                    Analitico: () => linha_analitico({
                        setPixel: store.setPixel,
                        p1: coord.pointA,
                        p2: coord.pointB,
                    }),
                    DDA: () => linha_dda({
                        setPixel: store.setPixel,
                        p1: coord.pointA,
                        p2: coord.pointB,
                    }),
                    Bresenham: () => linha_bresenham({
                        setPixel: store.setPixel,
                        p1: coord.pointA,
                        p2: coord.pointB,
                    })
                },
                Circle: {
                    Parametrico: () =>  circulo_parametrico({
                        setPixel: store.setPixel,
                        p1: coord.pointA,
                        raio: coord.pointB.x,
                    }),
                    Bresenham: () => circulo_bresenham({
                        setPixel: store.setPixel,
                        p1: coord.pointA,
                        raio: coord.pointB.x,
                    })
                },
                Fill: {
                    FloodFill: () => flood_fill({
                        setPixel: store.setPixel,
                        seed: coord.pointA,
                    }),
                    AnaliseGeometrica: () => analise_geometrica({
                        setPixel: store.setPixel,
                        top: 0,
                        bottom: store.pixels,
                        left: 0,
                        right: store.pixels
                    })
                },
                Figures: {
                    Circunferencia: function(){

                        circulo_parametrico({
                            setPixel: store.setPixel,
                            p1: {x: 10, y: 10},
                            raio: 10,
                        })

                        flood_fill({
                            setPixel: store.setPixel,
                            seed: {x: 10, y: 10},
                        })

                    },
                    Retangulo: () => {

                        let border = 1;
                        let width = 30;
                        let height = 20;

                        for (let x = 0; x < width; x++) {
                            for (let y = 0; y < height; y++) {
                                if (x < border || x >= width - border || y < border || y >= height - border) {
                                    store.setPixel(x, y, Colors.BLUE);
                                } 
                            }
                        }

                        analise_geometrica({
                            setPixel: store.setPixel,
                            top: 0,
                            bottom: store.pixels,
                            left: 0,
                            right: store.pixels
                        })

                    },
                    FigA: () => {
                        const seed = figA[Math.floor(Math.random() * figA.length)];
                        figA.forEach(p => store.setPixel(p.x, p.y, Colors.BLUE));
                        flood_fill({
                            setPixel: store.setPixel,
                            seed: {x: 18, y: 18},
                        })

                    },
                    FigB: () => {
                        const seed = figB[Math.floor(Math.random() * figB.length)];
                        figB.forEach(p => store.setPixel(p.x, p.y, Colors.BLUE));
                        flood_fill({
                            setPixel: store.setPixel,
                            seed: {x: 25, y: 25},
                        })

                    },
                }
            }

            return {
                store,
                coord,
                algo,
                fig,
                currentTab,
                tabs,
                renderFunctions
            }
        },
        methods: {
            desenha() {
                if (this.currentTab != 'Fill');
                    this.store.clear();

                if (this.currentTab == 'Fill' && this.fig.getFigure != 'Selecione uma figura') 
                {
                    this.store.clear();
                    this.renderFunctions.Figures![this.fig.getFigure]();
                }
                else
                {
                    this.renderFunctions[this.currentTab]![this.algo.getAlgorithm]();   
                }

                this.store.render();
            },
        },
        mounted() {},
        beforeUnmount() {},
    };
</script>