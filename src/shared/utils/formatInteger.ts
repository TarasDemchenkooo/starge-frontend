export default function formatIntegerWithCommas(value: number) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g

    return String(value).replace(regexp, ',')
}