import { Address, beginCell, toNano } from 'ton'

export default function createBoc(address: string, amount: number) {
    const recipientAddress = Address.parse(address)
    const transferAmount = toNano(amount)

    const msg = beginCell()
        .storeUint(0, 32)
        .storeUint(0, 64)
        .storeCoins(transferAmount)
        .storeAddress(recipientAddress)
        .storeBit(false)
        .storeCoins(0)
        .storeBit(false)
        .endCell()

    const boc = msg.toBoc({ idx: false })
    const bocHex = boc.toString('hex')

    return bocHex
}