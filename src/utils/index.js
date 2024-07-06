// 通用log方法
export const log = {
  info: (val) => console.log(`[LOG] - ${val}`),
  warn: (val) => console.log(`[WARN] - ${val}`),
  error: (val) => console.log(`[ERROR] - ${val}`)
}

// 延迟函数
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))