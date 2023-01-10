import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "@/hooks/useApp"
import { changeMessageAction } from "@/store/modules/home"

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { message } = useAppSelector(
    (state) => ({
      message: state.home.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  const handleChangeMessage = () => {
    dispatch(changeMessageAction("home页面的message被修改"))
  }

  return (
    <div>
      <h2>Home页面</h2>
      <div>消息：{message}</div>
      <button onClick={handleChangeMessage}>改变消息内容</button>
    </div>
  )
}

export default memo(Home)
