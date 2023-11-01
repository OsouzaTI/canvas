import { Colors } from "@/Constants/Colors";
import { useCanvasStore } from "@/stores/canvas";
import type { AnaliseGeometrica } from "@/types/PlotFunction";

export default async function analise_geometrica({setPixel, top, bottom, left, right} : AnaliseGeometrica) {

    const store = useCanvasStore();
    
    async function sleep() 
    {
        await new Promise(resolve => setTimeout(() => {
            store.render();
            resolve(0);
        }, 10));
    }
    
    //verticalmanete 

    for(let x = left; x < right; x++)
    {
        for(let y = top; y < bottom; y++)
        {
            if(store.grid![x][y] === Colors.BLUE && (x >= left && x < right))
            {    
                let borderPixel = 0;
                let offset = 1;
                while(store.grid![x][y+1] === Colors.BLUE) {
                    y++;
                    borderPixel++;
                    if (borderPixel > offset) break;
                }
                
                while(borderPixel < offset && store.grid![x][++y] !== Colors.BLUE && y < bottom){                    
                    setPixel(x, y, Colors.WHITE);                                    
                    await sleep();
                }
            }
        }
    }


    // for(let y = top; y < bottom; y++)
    // {
    //     for(let x = left; x < right; x++)
    //     {
    //         if(store.grid![x][y] === Colors.BLUE && (x >= left && x < right))
    //         {     
    //             while(store.grid![x][++y] !== Colors.BLUE && y < bottom){
    //                 setPixel(x, y, Colors.WHITE);                                    
    //                 await sleep();
    //             }
    //         }
    //     }
    // }

}