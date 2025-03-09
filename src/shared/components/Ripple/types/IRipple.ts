export interface IRipple {
    id?: string
    children: React.ReactNode
    onClick: (event: React.MouseEvent) => void
    className?: string
    color?: string
    holdTime?: number
    inDuration?: string
    outDuration?: string
}