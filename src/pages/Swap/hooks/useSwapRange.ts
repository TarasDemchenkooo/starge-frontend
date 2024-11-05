import { create } from "zustand"
import { ISwapRange } from "../types/ISwapRange"
import validateSwapRange from "../utils/validateSwapRange"

const useSwapRange = create<ISwapRange>(set => ({
    allow: false,
    error: null,
    setSwapRange: amount => {
        const { allow, error } = validateSwapRange(amount)
        set({ allow, error })
    }
}))

export default useSwapRange