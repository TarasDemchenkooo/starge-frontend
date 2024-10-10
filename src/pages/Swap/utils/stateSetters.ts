import { comission, starPrice, starsConverter, tonConverter } from "./converters"

interface ISetters {
    value: number
    price: number
    setMinStarsAmount: (value: boolean) => void
    setMaxStarsAmount: (value: boolean) => void
    setMinTonAmount: (value: boolean) => void
    setMaxTonAmount: (value: boolean) => void
    setSelfQuote: (value: string) => void
    setOpposite: (value: string) => void
    setOppositeQuote: (value: string) => void
}

export function calculateFromStars({
    value, price, setMinStarsAmount, setMaxStarsAmount,
    setMinTonAmount, setMaxTonAmount, setSelfQuote,
    setOpposite, setOppositeQuote }: ISetters) {
    const minCondition = value === 0 ? true : value >= 100
    const maxCondition = value === 0 ? true : value <= 100000

    setMinStarsAmount(minCondition)
    setMaxStarsAmount(maxCondition)

    setMinTonAmount(true)
    setMaxTonAmount(true)

    if (minCondition && maxCondition && value !== 0) {
        const calculations = starsConverter(value, price)
        setSelfQuote(calculations.starsQuote)
        setOpposite(calculations.ton)
        setOppositeQuote(calculations.tonQuote)
    } else {
        setSelfQuote('0')
        setOpposite('')
        setOppositeQuote('0')
    }
}

export function calculateFromTon({
    value, price, setMinStarsAmount, setMaxStarsAmount,
    setMinTonAmount, setMaxTonAmount, setSelfQuote,
    setOpposite, setOppositeQuote }: ISetters) {
    const tonInStars = Math.ceil(value * price / (1 - comission) / starPrice)
    const minCondition = value === 0 ? true : tonInStars >= 100
    const maxCondition = value === 0 ? true : tonInStars <= 100000

    setMinTonAmount(minCondition)
    setMaxTonAmount(maxCondition)

    setMinStarsAmount(true)
    setMaxStarsAmount(true)

    if (minCondition && maxCondition && value !== 0) {
        const calculations = tonConverter(value, price)
        setOpposite(calculations.stars)
        setOppositeQuote(calculations.starsQuote)
        setSelfQuote(calculations.tonQuote)
    } else {
        setOpposite('')
        setOppositeQuote('0')
        setSelfQuote('0')
    }
}