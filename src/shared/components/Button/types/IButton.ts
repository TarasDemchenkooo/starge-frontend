import { ReactNode } from "react"

export interface IButton {
    children?: ReactNode
    content?: string
    isLoading?: boolean
    className?: string
    disabled?: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}