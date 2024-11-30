import { Address, internal, toNano } from "ton-core"
import { TonClient, WalletContractV4 } from "ton"
import { mnemonicToPrivateKey } from "ton-crypto"
import { addr, apiKey, mnemonic } from "./mnemonic"

export default async function createBoc() {
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
        apiKey: apiKey
    });

    const keyPair = await mnemonicToPrivateKey(mnemonic)
    const walletContract = WalletContractV4.create({ workchain: 0, publicKey: keyPair.publicKey })
    const wallet = client.open(walletContract)

    const seqno = await wallet.getSeqno()

    const address = Address.parse(addr)
    const amount = toNano(0.01)

    const message = internal({
        to: address,
        value: amount
    })

    const boc = walletContract.createTransfer({
        secretKey: keyPair.secretKey,
        messages: [message],
        seqno,
        //@ts-ignore
        sendMode: 3
    })

    return boc.toBoc().toString('hex')

    // const jettonMasterAddress = Address.parse('EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS')
    // const userAddress = Address.parse('UQCGl9xm8cIezBLfC0jtkixFPRgYdU2jV8vIE0DGxohbRx4T')

    // const jettonMaster = client.open(JettonMaster.create(jettonMasterAddress))
    // const jettonWalletAddress = await jettonMaster.getWalletAddress(userAddress)

    // const destinationAddress = Address.parse('UQCU3TLLxYk2EDe1sb3SJXgeOrm9yu-iMvdYT07qwjzlOBtg')

    // const messageBody = beginCell()
    //     .storeUint(0x0f8a7ea5, 32)
    //     .storeUint(0, 64)
    //     .storeCoins(toNano(5))
    //     .storeAddress(destinationAddress)
    //     .storeAddress(destinationAddress)
    //     .storeBit(0)
    //     .storeCoins(toNano('0'))
    //     .storeBit(0)
    //     .endCell()

    // const internalMessage = internal({
    //     to: jettonWalletAddress,
    //     value: toNano('0.05'),
    //     bounce: true,
    //     body: messageBody
    // })

    // const internalMessageCell = beginCell()
    //     .store(storeMessageRelaxed(internalMessage))
    //     .endCell()

    // const signature = await sign(internalMessageCell, '')

    // const boc = 7
}