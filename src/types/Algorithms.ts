interface Algorithms {
    Line: {
        Analitico: () => void;
        DDA: () => void;
        Bresenham: () => void;
    };
    Circle: {
        Parametrico: () => void;
        Bresenham: () => void;
    };
    Fill: {
        FloodFill: () => void;
        AnaliseGeometrica: () => void;
    };
    Figures: {
        Retangulo: () => void;
        Circunferencia: () => void;
        FigA: () => void;
        FigB: () => void;
    }    
    [key: string]: { [key: string]: () => void } | null;
}

export { Algorithms };