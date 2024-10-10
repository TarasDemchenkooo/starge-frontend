export interface IModal {
    children: React.ReactNode
    setModalStatus: (status: boolean) => void
    closeRequest?: boolean
}