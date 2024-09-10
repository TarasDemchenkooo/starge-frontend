export default function inputChecker(input: string, value: number) {
    return input === '' ? true : Number(input.replace(',', '')) >= value
}