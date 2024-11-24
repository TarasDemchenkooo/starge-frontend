export default function formatDecimal(balance: number) {
    const roundedDecimal = Math.round(balance * 10 ** 6) / 10 ** 6

    return roundedDecimal
}