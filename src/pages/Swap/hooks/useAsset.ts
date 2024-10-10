import { create } from "zustand"
import { IUseAsset } from "../types/IUseAsset"

const useAsset = create<IUseAsset>(set => ({
    amount: {
        STARS: 0,
        TON: 0
    },
    setAmount: (asset, amount) => set(state =>
        ({ amount: { ...state.amount, [asset]: amount } })),
}))

export default useAsset