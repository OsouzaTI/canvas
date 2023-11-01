import { Colors } from "@/Constants/Colors";
import type { CircleFunc } from "@/types/PlotFunction";
  
  export function circulo_bresenham({setPixel, p1, raio} : CircleFunc) {
  
    let x = 0;
    let y = raio;
    let d = 3 - 2 * raio;

    function plotPixels() {
        setPixel(p1.x + x, p1.y + y, Colors.BLUE);
        setPixel(p1.x - x, p1.y + y, Colors.BLUE);
        setPixel(p1.x + x, p1.y - y, Colors.BLUE);
        setPixel(p1.x - x, p1.y - y, Colors.BLUE);
        setPixel(p1.x + y, p1.y + x, Colors.BLUE);
        setPixel(p1.x - y, p1.y + x, Colors.BLUE);
        setPixel(p1.x + y, p1.y - x, Colors.BLUE);
        setPixel(p1.x - y, p1.y - x, Colors.BLUE);
    }
  
    plotPixels();

    while (y >= x) {
      x++;
      if (d > 0) {
        y--;
        d = d + 4 * (x - y) + 10;
      } else {
        d = d + 4 * x + 6;
      }
      plotPixels();
    }
}