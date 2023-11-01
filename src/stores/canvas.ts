import { defineStore } from 'pinia'
import { Colors } from '@/Constants/Colors';

export interface CanvasState {
    canvasGrid: null | any[][];
    canvasWidth: number;
    canvasHeight: number;
    canvasPixels: number;
    canvas: null | HTMLCanvasElement;
    context: null | CanvasRenderingContext2D;
}

const useCanvasStore = defineStore('canvas', {
    state: () : CanvasState => ({
        canvasGrid: null,
        canvas: null,
        context: null,
        canvasWidth: 640,
        canvasHeight: 480,
        canvasPixels: 64,
    }),
    getters: {
        width: (state) => state.canvasWidth,
        height: (state) => state.canvasHeight,
        pixels: (state) => state.canvasPixels,
        grid: (state) => state.canvasGrid
    },
    actions: {
        setTamanhoPixel(pixels : number) {
            this.canvasPixels = pixels;
        },
        setPixel(x : number, y : number, color : string) {
            console.log(x, y, color);
            if (x >= 0 && x < this.pixels-1 && y >= 0 && y < this.pixels-1)
                this.canvasGrid![x][y] = color;
        },
        clear() {
            this.context!.clearRect(0, 0, this.width, this.height);
            this.canvasGrid = Array.from(Array(this.pixels), () => Array(this.pixels).fill(Colors.BLACK));
        },
        render() {
            
            const cw = this.canvas!.width;
            const ch = this.canvas!.height;
            
            const pw = Math.ceil(cw / this.pixels);
            const ph = Math.ceil(ch / this.pixels);
            
            for (let x = 0; x < this.pixels; x++)
            {
                for (let y = 0; y < this.pixels; y++)
                {
                    this.context!.fillStyle = this.grid![x][y];
                    this.context!.fillRect(x*pw+1, y*ph+1, pw-1, ph-1);
                }
            }

        },
        load() {

            this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
            this.context = this.canvas.getContext('2d')!;
            this.clear();
            this.render();
            
        }
    }
})

export { useCanvasStore }