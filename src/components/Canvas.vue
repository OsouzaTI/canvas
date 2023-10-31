<script setup lang="ts">
    import PixelConfiguration from './Algoritmos/PixelConfiguration.vue';
    import Tab from './Algoritmos/Tab.vue';
</script>

<template>
    <header class="flex flex-col w-3/4 md:flex-row gap-2  ">
        <canvas id="canvas" width="640" height="480" class="bg-black p-2 mb-2 w-full h-full shadow-md"></canvas>
        <section class="w-full md:w-1/2 flex flex-col gap-2 justify-center">
            <PixelConfiguration class="border border-1 rounded-md p-1 h-1/2" />
            <Tab class="border border-1 rounded-md p-1 h-4/5" />
        </section>
    </header>
</template>

<script lang="ts">

    export default {
        mounted: function () {
            this.canvasInit();
        },
        methods: {
            canvasInit() {
                const canvas : HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement; 
       
                const cw = canvas.width;
                const ch = canvas.height;

                const pixels = 64;
                const pw = Math.floor(cw / pixels); // pixel width
                const ph = Math.floor(ch / pixels); // pixel height

                const grid = Array.from(Array(pixels), () => Array(pixels).fill('#FF0000'));

                grid[10][10] = '#FF00FF'

                const context2d = canvas.getContext('2d')!;

                for (let x = 0; x < pixels; x++)
                {
                    for (let y = 0; y < pixels; y++)
                    {
                        context2d.fillStyle = grid[x][y];
                        context2d.fillRect(x*pw+1, y*ph+1, pw-1, ph-1);
                    }
                }

            },
        }
    }

    // window.addEventListener('load', function () {
        
    //     const canvas : HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement; 
       
    //     const cw = canvas.width;
    //     const ch = canvas.height;

    //     const pixels = 64;
    //     const pw = Math.floor(cw / pixels); // pixel width
    //     const ph = Math.floor(ch / pixels); // pixel height

    //     const grid = Array.from(Array(pixels), () => Array(pixels).fill('#FF0000'));

    //     const context2d = canvas.getContext('2d')!;

    //     for (let x = 0; x < pixels; x++)
    //     {
    //         for (let y = 0; y < pixels; y++)
    //         {
    //             context2d.fillStyle = grid[x][y];
    //             context2d.fillRect(x*pw+1, y*ph+1, pw-1, ph-1);
    //         }
    //     }

    //     function setPixel(x : number, y : number, color : String) {
    //         grid[x][y] = color;
    //     }

    // })

</script>