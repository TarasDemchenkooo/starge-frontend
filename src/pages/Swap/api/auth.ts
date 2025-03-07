import { backend } from "../../../shared/api/apiClinet"
import { IAuth } from "../../../shared/types/IAuth"

export default async function authUser(initData: string): Promise<IAuth> {
    return backend.post('/auth', { initData })
}