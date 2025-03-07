import payment from "../../../shared/constants/payment"

export default function calculatePrice(price: number, confirmedPrice?: number) {
    const currencyPrice = confirmedPrice || payment.starPrice / price
    const index = currencyPrice < 1 ? 3 : 4
    const scientificNotation = currencyPrice.toExponential(index)
    const formattedPrice = Number(scientificNotation)

    return formattedPrice
}