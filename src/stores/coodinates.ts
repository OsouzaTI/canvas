import { defineStore } from 'pinia'
import { Colors } from '@/Constants/Colors';
import type { Point2D } from '@/types/Point2D';

export interface CoordinatesState {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

const useCoordinateStore = defineStore('coordinates', {
    state: () : CoordinatesState => ({
        x1: 0, 
        y1: 0,
        x2: 0,
        y2: 0
    }),
    getters: {
        pointA: function ({ x1, y1 }) : Point2D {
            return {x: x1, y: y1};
        },
        pointB: function ({ x2, y2 }) : Point2D {
            return {x: x2, y: y2};
        },
    },
    actions: {
   
    }
})

export { useCoordinateStore }