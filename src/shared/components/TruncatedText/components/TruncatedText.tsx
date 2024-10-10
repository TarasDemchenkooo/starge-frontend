import { useEffect, useRef, useState } from 'react'
import styles from './TruncatedText.module.scss'
import { ITruncatedText } from '../types/ITruncatedText'
import classNames from 'classnames'
import truncate from '../utils/truncate'

export default function TruncatedText({ text, className }: ITruncatedText) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [displayedText, setDisplayedText] = useState(text)

    const containerClassnames = classNames({
        [styles.container]: true,
        [className!]: true
    })

    useEffect(() => {
        if (containerRef.current) {
            const newText = truncate(text, containerRef.current)
            setDisplayedText(newText)
        }
    }, [])

    return (
        <div ref={containerRef} className={containerClassnames}>
            {displayedText}
        </div>
    )
}