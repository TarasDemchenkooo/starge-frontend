export default function truncate(text: string, container: HTMLDivElement) {
    const containerWidth = container.offsetWidth
    const textWidth = container.scrollWidth

    if (textWidth <= containerWidth) {
        return text
    }

    const letterWidth = textWidth / text.length
    const maxLetters = containerWidth / letterWidth

    const partLength = Math.floor(maxLetters / 2) - 1
    const startText = text.slice(0, partLength)
    const endText = text.slice(-partLength)

    return `${startText}...${endText}`
}