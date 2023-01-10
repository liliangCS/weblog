import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "@/views/home"))
const Login = lazy(() => import(/* webpackChunkName: "login" */ "@/views/login"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  }
]

export default routes
