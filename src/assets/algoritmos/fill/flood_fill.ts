import { Colors } from "@/Constants/Colors";
import { useCanvasStore } from "@/stores/canvas";
import type { FloodFill } from "@/types/PlotFunction";

export async function flood_fill(props : FloodFill) {
    const store = useCanvasStore();
    
    await new Promise(resolve => setTimeout(() => {
        store.render();
        resolve(0);
    }, 500));

    const {x, y} = props.seed;
    if (store.grid![x][y] == Colors.BLACK) {
        store.grid![x][y] = Colors.WHITE;
        flood_fill({...props, seed: {x: x + 1, y: y}});
        flood_fill({...props, seed: {x: x, y: y + 1}});
        flood_fill({...props, seed: {x: x - 1, y: y}});
        flood_fill({...props, seed: {x: x, y: y - 1}});
    }
}