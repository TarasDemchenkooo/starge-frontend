export default function formatBalance(balance: number) {
    const roundedBalance = Math.round(balance * 100) / 100

    return roundedBalance
}