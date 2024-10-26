export default function formatDecimal(balance: number) {
    const roundedDecimal = Math.round(balance * 100) / 100

    return roundedDecimal
}