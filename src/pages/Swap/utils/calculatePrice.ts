import starPrice from "../../../shared/constants/StarPrice"

export default function calculatePrice(price: number) {
    const currencyPrice = starPrice / price
    const scientificNotation = currencyPrice.toExponential(3)
    const formattedPrice = Number(scientificNotation)

    return formattedPrice
}