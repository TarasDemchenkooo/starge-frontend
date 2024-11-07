import { InputType } from "./InputType"

export interface IInputs {
    source: string
    target: string
    activeInput: InputType
    setSource: (value: string, price: number) => void
    setTarget: (value: string, price: number) => void
    setActiveInput: (type: InputType) => void
    clearInputs: () => void
}