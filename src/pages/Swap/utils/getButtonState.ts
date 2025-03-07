import payment from "../../../shared/constants/payment"
import formatSourceInput from "./formatSourceInput"

export default function getButtonState(source: string) {
    const amount = Number(source)
    const nullValueError = 'Enter an amount'
    const maxSwapRangeError = `Max amount is ${formatSourceInput(payment.maxSwapAmount.toString())} STARS`
    const acceptableText = 'Swap'

    return {
        content: amount === 0 ? nullValueError : amount > payment.maxSwapAmount
            ? maxSwapRangeError : acceptableText,
        disabled: amount === 0 || amount > payment.maxSwapAmount
    }
}