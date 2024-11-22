import { ReactNode } from "react"

type Animation = 'in' | 'out'

export interface IWrapper {
    children: ReactNode
    animation: Animation
}