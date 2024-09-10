class WSService {
    private client: WebSocket

    constructor() {
        this.client = new WebSocket('wss://stream.binance.com:9443/ws/tonusdt@ticker')
    }

    getClient() {
        return this.client
    }

    getPrice(): Promise<number> {
        return new Promise((resolve) => {
            this.client.onmessage = function (event) {
                const data = JSON.parse(event.data)
                resolve(Number(data.c))
            }
        })
    }
}

const WSTon = new WSService()

export default WSTon