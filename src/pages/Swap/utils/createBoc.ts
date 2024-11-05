import { Address, beginCell, internal, storeMessageRelaxed, toNano } from "ton-core"
import { TonClient, JettonMaster, WalletContractV4 } from "ton"
import { sign } from "ton-crypto";


export default async function createBoc() {
    const client = new TonClient({
        endpoint: 'https://toncenter.com/api/v2/jsonRPC',
    });

    const jettonMasterAddress = Address.parse('EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS')
    const userAddress = Address.parse('UQCGl9xm8cIezBLfC0jtkixFPRgYdU2jV8vIE0DGxohbRx4T')

    const jettonMaster = client.open(JettonMaster.create(jettonMasterAddress))
    const jettonWalletAddress = await jettonMaster.getWalletAddress(userAddress)

    const destinationAddress = Address.parse('UQCU3TLLxYk2EDe1sb3SJXgeOrm9yu-iMvdYT07qwjzlOBtg')

    const messageBody = beginCell()
        .storeUint(0x0f8a7ea5, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(5))
        .storeAddress(destinationAddress)
        .storeAddress(destinationAddress)
        .storeBit(0)
        .storeCoins(toNano('0'))
        .storeBit(0)
        .endCell()

    const internalMessage = internal({
        to: jettonWalletAddress,
        value: toNano('0.05'),
        bounce: true,
        body: messageBody
    })

    const internalMessageCell = beginCell()
        .store(storeMessageRelaxed(internalMessage))
        .endCell()

        const signature = await sign(internalMessageCell, '')

        const boc = 7
}