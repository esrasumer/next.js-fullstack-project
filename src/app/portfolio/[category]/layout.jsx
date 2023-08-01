import React from 'react'
import style from'./page.module.css'

export default function Layout({children}) {
  return (
    <div>
        <h1 className={style.mainTitle}>Our Works</h1>
        {children}
    </div>
  )
}
