import { create } from "zustand"
import { SourceInput } from "../types/ISourceInput"

const useSourceInput = create<SourceInput>(set => ({
    sourceAmount: '',
    setSourceAmount: newAmount => set({ sourceAmount: newAmount })
}))

export default useSourceInput