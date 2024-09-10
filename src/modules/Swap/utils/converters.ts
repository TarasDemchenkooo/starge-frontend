import formatNumber from "../../../utils/formatNumber"
import formatNumberWithCommas from "../../../utils/formatNumberWithCommas"

const starsPrice = 0.013
const comissionRate = 0.05

export function starsConverter(value: number, price: number) {
    const usdValue = value * starsPrice

    return {
        starsQuote: formatNumberWithCommas(formatNumber(usdValue), false),
        ton: formatNumberWithCommas(formatNumber(usdValue / price * (1 - comissionRate)), false),
        tonQuote: formatNumberWithCommas(formatNumber(usdValue * (1 - comissionRate)), false)
    }
}

export function tonConverter(value: number, price: number) {
    const usdValue = value * price

    return {
        stars: formatNumberWithCommas(formatNumber(Math.round(usdValue / (1 - comissionRate) / starsPrice)), false),
        starsQuote: formatNumberWithCommas(formatNumber(usdValue / (1 - comissionRate)), false),
        tonQuote: formatNumberWithCommas(formatNumber(usdValue), false),
    }
}