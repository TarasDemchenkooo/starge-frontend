import { IConfirmSwap } from "../types/IConfirmSwap"
import { IValidatedSwap } from "../types/IValidatedSwap"
import apiClient from "../../../shared/api/apiClinet"

export default async function confirmSwap(invoice: IConfirmSwap): Promise<IValidatedSwap> {
    return apiClient.post('/user/invoice', invoice)
}