import { create } from "zustand"
import calculatePrice from "../utils/calculatePrice"
import { IInputs } from "../types/IInputs"

const useInputs = create<IInputs>(set => ({
    source: '',
    target: '',
    activeInput: 'source',
    setSource: (value, price) => {
        const cleanAmount = String(parseFloat((Number(value) * calculatePrice(price)).toPrecision(12)))
        set({ source: value, target: cleanAmount === '0' ? '' : cleanAmount })
    },
    setTarget: (value, price) => {
        const cleanAmount = value === '.' ? '0' : String(Math.ceil(Number(value) / calculatePrice(price)))
        set({ source: cleanAmount === '0' ? '' : cleanAmount, target: value })
    },
    setActiveInput: (type) => set({ activeInput: type }),
    clearInputs: () => set({ source: '', target: '' })
}))

export default useInputs