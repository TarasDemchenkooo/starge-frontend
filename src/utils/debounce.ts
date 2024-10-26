export default function debounce(func: Function, wait: number) {
  let timeout: number

  return function (this: any, ...args: any[]) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}