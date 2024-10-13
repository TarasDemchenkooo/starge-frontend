import starPrice from "../../../shared/constants/StarPrice"

export default function calculatePrice(price: number) {
    const minSwap = starPrice * 100
    const actualPrice = minSwap / price
    const roundedPrice = Math.round(actualPrice * 100) / 100

    return roundedPrice
}