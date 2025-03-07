import { backend } from "../../../shared/api/apiClinet"
import { IConfirmedSwap } from "../types/IConfirmedSwap"

export default async function confirmSwap(invoice: IConfirmedSwap): Promise<{ invoiceLink: string }> {
    return backend.post('/user/invoice', invoice)
}