export default function formatTargetInput(amount: string) {
    if (amount === '.') return '0.'
    
    const [int, dec] = amount.split('.')
    const regexp = /\B(?=(\d{3})+(?!\d))/g

    const intFormatted = int.replace(regexp, ',')
    const decFormatted = amount.includes('.') ? `.${dec}` : ''

    return intFormatted.concat(decFormatted)
}