import { create } from "zustand"
import { ITargetCurrency } from "../types/ITargetCurrency"
import { Assets } from "../types/Currencies"
import TonIcon from '../../../assets/svg/ton-logo.svg?react'

const useTargetCurrency = create<ITargetCurrency>(set => ({
    currency: {
        symbol: Assets.TON,
        icon: <TonIcon />,
        price: 0,
        balance: 0
    },
    setCurrency: (currencyData) => set({ currency: currencyData }),
    setPrice: (price) => set(state => ({ currency: { ...state.currency, price } })),
    setBalance: (balance) => set(state => ({ currency: { ...state.currency, balance } }))
}))

export default useTargetCurrency