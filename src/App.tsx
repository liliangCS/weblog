import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"

export default function App() {
  return (
    <div className="app">
      <Suspense fallback="文件下载中...">{useRoutes(routes)}</Suspense>
    </div>
  )
}
