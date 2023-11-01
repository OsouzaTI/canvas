import { Colors } from "@/Constants/Colors";
import type { LineFunc } from "@/types/PlotFunction";

export function linha_analitico({setPixel, p1, p2} : LineFunc) {
  console.log(p1, p2)
  if (p1.x === p2.x) {
    // Caso seja linha vertical
    for (let y = p1.y; y <= p2.y; y++) {
      setPixel(p1.x, y, Colors.BLUE);
    }
  } else {
    // Coeficiente angular
    const m = (p2.y - p1.y) / (p2.x - p1.x);
    // Coeficiente linear
    const b = p2.y - m * p2.x;
    for (let x = p1.x; x <= p2.x; x++) {
      // Calculando Y pela equação da reta
      const y = Math.round(m * x + b);
      setPixel(x, y, Colors.BLUE);
    }
  }

}