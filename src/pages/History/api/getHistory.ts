import { backend } from "../../../shared/api/apiClinet"
import { ITransaction } from "../../../shared/types/ITransaction"

export default function getHistory(): Promise<ITransaction[] | []> {
    return backend.get('/user/history')
}