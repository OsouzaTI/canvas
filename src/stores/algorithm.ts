import { defineStore } from 'pinia'
import { Colors } from '@/Constants/Colors';
import type { Point2D } from '@/types/Point2D';

export interface AlgorithmState {
    algorithm: string;
}

const useAlgorithmStore = defineStore('algorithm', {
    state: () : AlgorithmState => ({
        algorithm: ''
    }),
    getters: {
        getAlgorithm: (state) => state.algorithm
    },
    actions: {
   
    }
})

export { useAlgorithmStore }