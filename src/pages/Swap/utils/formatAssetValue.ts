export default function formatAssetValue(value: string, formatInitial?: boolean) {
    if (value === '0' && formatInitial) return ''
    if (value === '.') return '0.'

    const [int, dec] = value.split('.')
    const regexp = /\B(?=(\d{3})+(?!\d))/g

    const intFormatted = int.replace(regexp, ',')
    const decFormatted = value.includes('.') ? `.${dec}` : ''

    return intFormatted.concat(decFormatted)
}