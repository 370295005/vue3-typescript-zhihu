export default function parseTime (time = '', cFormat = '{y}-{m}-{d} {h}:{i}:{s}') {
  const format = cFormat
  // 兼容ios
  if (typeof time === 'string') {
    time = time.replace(/-/g, '/')
  }
  const date = new Date(time)

  const formatObj: { [index: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value: any = formatObj[key]
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
