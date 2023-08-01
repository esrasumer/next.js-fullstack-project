import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle}>Choose a gallery</h1>
    <div className={style.items}>
     <Link className={style.item} href="/portfolio/illustrations">  
      <span>Illustrations </span>
      </Link>
     <Link className={style.item} href="/portfolio/websites">  
      <span>Websites </span>
      </Link>
     <Link className={style.item} href="/portfolio/application">  
      <span>Application </span>
      </Link>
    </div>
    </div>
  )
}
