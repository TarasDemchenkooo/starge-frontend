export default function defineRipple(event: React.TouchEvent) {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(button.clientWidth, button.clientHeight)
    const x = event.touches[0].clientX - rect.left - size / 2
    const y = event.touches[0].clientY - rect.top - size / 2

    return { x, y, size }
}