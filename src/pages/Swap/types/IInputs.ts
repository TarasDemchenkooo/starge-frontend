export interface IInputs {
    source: string
    target: string
    setSource: (value: string, price: number) => void
    setTarget: (value: string, price: number) => void
    clearInputs: () => void
}