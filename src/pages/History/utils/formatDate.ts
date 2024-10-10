export default function formatDate(timestamp: Date, transform: boolean = true) {
    const date = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const isToday = date.toDateString() === today.toDateString()
    const isYesterday = date.toDateString() === yesterday.toDateString()
    const isCurrentYear = date.getFullYear() === today.getFullYear()

    const options: Intl.DateTimeFormatOptions = {
        year: transform || isCurrentYear ? undefined : 'numeric',
        day: (isToday || isYesterday) && transform ? undefined : '2-digit',
        month: (isToday || isYesterday) && transform ? undefined : 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    return new Date(date).toLocaleString('en-GB', options)
}