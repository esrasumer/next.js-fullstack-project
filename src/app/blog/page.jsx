import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './page.module.css'

export default function Blog() {
  return (
    <div className={style.container}>
      <Link href="/testId" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src=""
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src=""
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
        </div>
      </Link>
    </div>
  )
}
