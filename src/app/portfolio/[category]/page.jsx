import React from 'react'
import style from './page.module.css'
import Button from '@/companets/Button/Button'
import Image from 'next/image'

export default function Category({ params }) {
  console.log(params)
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1  className={style.catTitle}>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            alt=''
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1  className={style.catTitle}>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            alt=''
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1  className={style.catTitle}>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            alt=''
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>
    </div>
  )
}
