export default function formatAddress(address: string) {
    const firstPart = address.slice(0, 4)
    const secondPart = address.slice(-4)
    const separator = '...'

    return firstPart.concat(separator, secondPart)
}