export interface IButton {
    className?: string
    children?: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}