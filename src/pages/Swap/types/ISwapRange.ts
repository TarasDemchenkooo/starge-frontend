export interface ISwapRange {
    allow: boolean
    error: null | string
    setSwapRange: (amount: number) => void
}