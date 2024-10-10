export default function formatDecimalWithCommas(value: string) {
    let result = ''

    const regexp = /\B(?=(\d{3})+(?!\d))/g
    const [integer, decimal] = value.split('.')

    const formattedInteger = integer.replace(regexp, ',')

    if (decimal) {
        result = formattedInteger + '.' + decimal
    } else {
        result = formattedInteger
    }

    return result
}