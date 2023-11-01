import { defineStore } from 'pinia'

export interface FigureState {
    figure: string;
}

const useFigureStore = defineStore('figure', {
    state: () : FigureState => ({
        figure: 'Selecione uma figura'
    }),
    getters: {
        getFigure: (state) => state.figure
    },
    actions: {
   
    }
})

export { useFigureStore }