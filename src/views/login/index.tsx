import React, { memo, useRef, useState } from "react"
import type { FC, ReactNode } from "react"
import style from "./style.module.less"

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  /*开始*----------logo小人的逻辑代码----------*/
  //#region

  // 状态
  const loginRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(10)

  // 功能函数
  const modelAction = (
    element: HTMLElement,
    leftDistance: number,
    rightDistance: number,
    actionDistance: number
  ) => {
    let flag = 1
    if (leftDistance >= actionDistance + 10 && rightDistance >= actionDistance + 10) {
      flag = Math.random() > 0.5 ? -1 : 1
    } else if (leftDistance < actionDistance + 10) {
      flag = -1
    }
    setPosition(() => {
      const newPosition = position + flag * actionDistance
      element.style.right = `${newPosition}px`
      return newPosition
    })
  }

  // 事件处理
  const handleMouseEnter = (element: HTMLElement) => {
    if (loginRef.current) {
      // 舞台宽度
      const stageWidth = loginRef.current.offsetWidth
      // 小人自身的宽度
      const modelWidth = element.offsetWidth
      // 小人距离舞台左边的距离
      const leftDistance = element.offsetLeft
      // 小人距离舞台右边的距离
      const rightDistance = stageWidth - leftDistance - modelWidth
      modelAction(element, leftDistance, rightDistance, 100)
    }
  }

  //#endregion
  /*结束*----------logo小人的逻辑代码----------*/

  return (
    <div className={style.login} ref={loginRef}>
      {/* logo小人 */}
      <div
        className={style["login-logo"]}
        onMouseEnter={(event) => {
          handleMouseEnter(event.target as HTMLElement)
        }}
      ></div>
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
