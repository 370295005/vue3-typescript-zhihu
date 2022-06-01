export function setCookie(key: string, value: string, expire: number = 1): void {
  const date = new Date()
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000)
  const expires = `expires=${date['toGMTString']()}`
  document.cookie = `${key}=${value};${expires};path=/;`
}

export function getCookie(key: string): string {
  const cookie = document.cookie
  const arr = cookie.split('; ')
  for (const i in arr) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      return temp[1]
    }
  }
  return ''
}

