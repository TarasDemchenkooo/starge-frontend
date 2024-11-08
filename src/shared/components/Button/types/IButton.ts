export interface IButton {
    content: string
    isLoading?: boolean
    className?: string
    disabled?: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}