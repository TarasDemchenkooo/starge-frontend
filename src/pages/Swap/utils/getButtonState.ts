import maxSwapRange from "../../../shared/constants/maxSwapRange"
import formatSourceInput from "./formatSourceInput"

export default function getButtonState(source: string) {
    const amount = Number(source)
    const nullValueError = 'Enter an amount'
    const maxSwapRangeError = `Max amount is ${formatSourceInput(maxSwapRange.toString())} STARS`
    const acceptableText = 'Swap'

    return {
        content: amount === 0 ? nullValueError : amount > maxSwapRange
            ? maxSwapRangeError : acceptableText,
        disabled: amount === 0 || amount > maxSwapRange
    }
}