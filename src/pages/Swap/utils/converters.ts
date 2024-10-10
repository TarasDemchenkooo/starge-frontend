import formatDecimalWithCommas from "../../../utils/formatDecimalWithCommas"

export const starPrice = 0.013
export const comission = 0.05

export function starsConverter(value: number, price: number) {
    const starsInUSD = value * starPrice
    const starsInUSDFormatted = formatDecimalWithCommas(
        parseFloat(starsInUSD.toFixed(2)).toString()
    )

    const ton = starsInUSD * (1 - comission) / price
    const tonFormatted = formatDecimalWithCommas(
        parseFloat(ton.toFixed(2)).toString()
    )

    const tonInUSD = starsInUSD * (1 - comission)
    const tonInUSDFormatted = formatDecimalWithCommas(
        parseFloat(tonInUSD.toFixed(2)).toString()
    )

    return {
        starsQuote: starsInUSDFormatted,
        ton: tonFormatted,
        tonQuote: tonInUSDFormatted
    }
}

export function tonConverter(value: number, price: number) {
    const tonInUSD = value * price

    const stars = Math.ceil(tonInUSD / (1 - comission) / starPrice)
    const starsFormatted = formatDecimalWithCommas(stars.toString())

    const starsInUSD = tonInUSD / (1 - comission)
    const starsInUSDFormatted = formatDecimalWithCommas(
        parseFloat(starsInUSD.toFixed(2)).toString()
    )

    const tonInUSDFormatted = formatDecimalWithCommas(
        parseFloat(tonInUSD.toFixed(2)).toString()
    )

    return {
        stars: starsFormatted,
        starsQuote: starsInUSDFormatted,
        tonQuote: tonInUSDFormatted
    }
}

export function limitsForTon(price: number) {
    const min = 100
    const max = 100000

    const minTonInStars = Math.ceil(min * starPrice / price * (1 - comission) * 100) / 100
    const maxTonInStars = Math.floor(max * starPrice / price * (1 - comission) * 100) / 100

    return {
        min: minTonInStars,
        max: maxTonInStars
    }
}