export default function formatNumberWithCommas(value: string, clean = true) {
    if (clean) {
        const cleanValue = value.replace(/\D/g, '')
        return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}