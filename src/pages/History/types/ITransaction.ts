enum Status {
    Pending = 'pending',
    Success = 'success',
    Error = 'error'
}

interface Currency {
    symbol: string
    amount: number
}

export interface ITransaction {
    address: string
    from: Currency
    to: Currency
    status: Status
    timestamp: Date
}