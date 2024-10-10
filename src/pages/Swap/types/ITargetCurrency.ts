import { Assets } from "./Currencies"

interface ICurrency {
    symbol: Assets
    icon: React.ReactNode
    price: number
    balance: number
}

export interface ITargetCurrency {
    currency: ICurrency
    setCurrency: (currencyData: ICurrency) => void
    setPrice: (price: number) => void
    setBalance: (balance: number) => void
}