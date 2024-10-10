import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import { ISticker } from "../types/ISticker"

export default function Sticker({ className, sticker }: ISticker) {
    const lottieRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: lottieRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: sticker
        })

        return () => animation.destroy()
    }, [])

    return (
        <div className={className} ref={lottieRef}></div>
    )
}