import HttpRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"

export const httpRequest = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
