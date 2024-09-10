import { starsConverter, tonConverter } from "./converters"
import inputChecker from "./inputChecker"

interface ISetForStars {
    value: string
    price: number
    setStarsChecker: (checker: boolean) => void
    setStarsQuote: (value: string) => void
    setTon: (value: string) => void
    setTonQuote: (value: string) => void
}

export function setForStars(arg: ISetForStars) {
    const requirements = inputChecker(arg.value, 100)
    arg.setStarsChecker(requirements)

    if (requirements && arg.value !== '') {
        const data = starsConverter(Number(arg.value), arg.price)

        arg.setStarsQuote(data.starsQuote)
        arg.setTon(data.ton)
        arg.setTonQuote(data.tonQuote)
    } else {
        arg.setStarsQuote('0')
        arg.setTon('')
        arg.setTonQuote('0')
    }
}

interface ISetForTon {
    value: string
    price: number
    setTonChecker: (checker: boolean) => void
    setStars: (value: string) => void
    setStarsQuote: (value: string) => void
    setTonQuote: (value: string) => void
}

export function setForTon(arg: ISetForTon) {
    const requirements = inputChecker(arg.value, 0.25)
    arg.setTonChecker(requirements)

    if (requirements && arg.value !== '') {
        const data = tonConverter(Number(arg.value), arg.price)

        arg.setStars(data.stars)
        arg.setStarsQuote(data.starsQuote)
        arg.setTonQuote(data.tonQuote)
    } else {
        arg.setStars('')
        arg.setStarsQuote('0')
        arg.setTonQuote('0')
    }
}