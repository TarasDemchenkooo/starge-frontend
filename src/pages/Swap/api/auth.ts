import { IAuth } from "../../../shared/types/IAuth"
import apiClient from "../../../shared/api/apiClinet"

export default async function authUser(initData: string): Promise<IAuth> {
    return apiClient.post('/auth', { initData })
}