import { backend } from "../../../shared/api/apiClinet"

export default async function authUser(initData: string): Promise<{ jwt: string }> {
    return backend.post('/auth', { initData })
}