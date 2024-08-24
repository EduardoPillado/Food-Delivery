import { create } from 'zustand'

export const useMenuStore = create((set) => ({
    osos: 0,
    sumarOso: () => set((state) => ({
        osos: state.osos + 1
    })),
    removeAllBears: () => set({
        osos: 0
    }),

    lista_de_productos: [],
    actualizar_productos: ( nueva_lista ) => set( state => ({
        lista_de_productos: nueva_lista
    }) )
}))
