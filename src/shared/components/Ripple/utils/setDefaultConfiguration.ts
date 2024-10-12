import { IRipple } from "../types/IRipple"

export default function setDefaultConfiguration(cfg: IRipple) {
    const color = Telegram.WebApp.themeParams.hint_color
    const inDuration = '1s'
    const outDuration = '0.5s'
    const holdTime = 0
    
    return {
        color: cfg.color || color,
        inDuration: cfg.inDuration || inDuration,
        outDuration: cfg.outDuration || outDuration,
        holdTime: cfg.holdTime || holdTime
    }
}