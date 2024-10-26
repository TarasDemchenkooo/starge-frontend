export default function formatSourceInput(amount: string) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g
    const amountFormatted = amount.replace(regexp, ',')

    return amountFormatted
}