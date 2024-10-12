export interface IRipple {
    children: React.ReactNode
    onClick: (event: React.MouseEvent) => void
    className?: string
    color?: string
    holdTime?: number
    inDuration?: string
    outDuration?: string
}