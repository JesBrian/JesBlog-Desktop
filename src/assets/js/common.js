
/**
 * 滚动加载时间
 */
export function scrollToLoadData () {
  let finished = false
  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let viewHight = document.body.clientHeight

    if (!finished && (viewHight - scrollTop) <= 800) {
      // 这里加载数据..
      console.log(666)
      finished = true
    }
  })
}

/**
 * 时间戳转时间字符串
 * @param timestamp
 * @return {string}
 */
export function timestampToTime (timestamp) {
  let date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
  let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':'
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}
