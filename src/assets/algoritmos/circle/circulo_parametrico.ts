import { Colors } from "@/Constants/Colors";
import type { CircleFunc } from "@/types/PlotFunction";

export function circulo_parametrico({setPixel, p1, raio} : CircleFunc) {
    let x = p1.x + raio;
    let y = p1.y;
  
    for (let t = 1; t < 360; t++) {
      setPixel(x, y, Colors.BLUE);
      x = Math.round(p1.x + raio * Math.cos((Math.PI * t) / 180));
      y = Math.round(p1.y + raio * Math.sin((Math.PI * t) / 180));
    }
}