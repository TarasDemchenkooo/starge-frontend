export default function getTonStream() {
    const websocket = new WebSocket('wss://stream.binance.com:9443/ws/tonusdt@ticker')

    return websocket
}