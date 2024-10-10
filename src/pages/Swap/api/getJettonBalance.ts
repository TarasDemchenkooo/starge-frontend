import axios from "axios"
import { Address } from "ton-core"
import tonApiKey from "../../../shared/constants/TonApiKey"
import tonApiUrl from "../../../shared/constants/TonApiUrl"

export default async function getJettonBalance(addr: string, ca: string) {
    const addrId = Address.parse(addr).hash
    const caId = Address.parse(ca).hash

    return axios.get(tonApiUrl.concat(`accounts/${addrId}/jettons/${caId}`), {
        headers: {
            Authorization: `Bearer ${tonApiKey}`
        }
    })
}