const isDev = process.env.NODE_ENV === "development"

// 开发环境需要配置代理
export const BASE_URL = isDev ? "/api" : "xxx"
export const TIME_OUT = 10000
