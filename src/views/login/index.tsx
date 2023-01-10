import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import style from "./style.module.less"

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return (
    <div className={style.login}>
      <div className={style["login-box"]}>
        <h2>管理员登录</h2>
        <div className={style["user-box"]}>
          <input type="text" required />
          <label>用户名</label>
        </div>
        <div className={style["user-box"]}>
          <input type="password" required />
          <label>密码</label>
        </div>
        <div className={style.submit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </div>
      </div>
    </div>
  )
}

export default memo(Login)
