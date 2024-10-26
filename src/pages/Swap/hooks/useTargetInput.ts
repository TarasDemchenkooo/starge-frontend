import { create } from "zustand"
import { TargetInput } from "../types/ITargetInput"

const useTargetInput = create<TargetInput>(set => ({
    targetAmount: '',
    setTargetAmount: newAmount => set({ targetAmount: newAmount })
}))

export default useTargetInput