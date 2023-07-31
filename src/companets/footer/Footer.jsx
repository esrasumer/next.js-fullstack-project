import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {

  console.log('Footer')
  return (
    <div className={style.container}>
      <div>☺2023 Sümer. All right reeserved</div>
      <div className={style.social}>
        <Image src="/1.png" width={15} height={15}  className={style.icon} alt="Sümer facebook" />
        <Image src="/2.png" width={15} height={15}  className={style.icon} alt="Sümer instagram" />
        <Image src="/3.png" width={15} height={15}  className={style.icon} alt="Sümer Youtube" />
      </div>
    </div>
  )
}