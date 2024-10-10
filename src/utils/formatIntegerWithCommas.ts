export default function formatStarsWithCommas(value: string) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g

    return value.replace(regexp, ',')
}