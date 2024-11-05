export default function validateSwapRange(amount: number) {
    const maxSwapRangeError = 'Max amount is 50,000 STARS'
    const nullValueError = 'Enter an amount'

    const stateError = amount === 0
        ? nullValueError
        : amount > 50000
            ? maxSwapRangeError
            : null

    const swapState = {
        allow: amount <= 50000,
        error: stateError
    }

    return swapState
}