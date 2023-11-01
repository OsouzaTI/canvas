import type { Point2D } from "./Point2D";

interface LineFunc {
    setPixel : (x: number, y: number, color : string) => void;
    p1 : Point2D;
    p2 : Point2D;
}

interface CircleFunc {
    setPixel : (x: number, y: number, color : string) => void;
    p1 : Point2D;
    raio : number;
}

interface FloodFill {
    setPixel : (x: number, y: number, color : string) => void;
    seed: Point2D,
}

export { LineFunc, CircleFunc, FloodFill }