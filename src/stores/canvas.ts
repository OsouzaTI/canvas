import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Colors } from '@/Constants/Colors';


const useCanvasStore = defineStore('canvas', {
    state: () => ({
        canvasWidth: 320,
        canvasHeight: 320,
        canvasPixels: 2
    }),
    getters: {
        width: (state) => state.canvasWidth,
        height: (state) => state.canvasHeight,
        pixels: (state) => state.canvasPixels,
    },
    actions: {
        aumentarPixels() {
            this.canvasPixels += 8;            
            console.log('Aumentando ', this.pixels)
            this.load();
        },
        load() {

            const canvas : HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
            const cw = canvas.width;
            const ch = canvas.height;

            // const pixels = 64;
            const pw = Math.ceil(cw / this.pixels); // pixel width
            const ph = Math.ceil(ch / this.pixels); // pixel height

            const grid = Array.from(Array(this.pixels), () => Array(this.pixels).fill(Colors.BLACK));

            grid[1][1] = Colors.BLUE;

            const context2d = canvas.getContext('2d')!;

            context2d.clearRect(0, 0, this.width, this.height);

            for (let x = 0; x < this.pixels; x++)
            {
                for (let y = 0; y < this.pixels; y++)
                {
                    context2d.fillStyle = grid[x][y];
                    context2d.fillRect(x*pw+1, y*ph+1, pw-1, ph-1);
                }
            }

        }
    }
})

export { useCanvasStore }