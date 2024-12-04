export default function formatDate(createdAt: string, transform: boolean = true) {
    const date = new Date(createdAt)
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const options: Intl.DateTimeFormatOptions = {
        year: transform ? undefined : 'numeric',
        day: transform ? undefined : '2-digit',
        month: transform ? undefined : 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    return new Date(date).toLocaleString('en-GB', options)
}