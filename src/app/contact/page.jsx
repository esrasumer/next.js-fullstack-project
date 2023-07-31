import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Button from '@/companets/Button/button'

export default function Contact() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Lets Keep in Touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={style.image}
          />
        </div>
        <form className={style.form}>
          <input type="text" placeholder='name' className={style.input} />
          <input type="text" placeholder='email' className={style.input} />
          <textarea
            placeholder='message'
            className={style.textarea}
            cols="30"
            rows="10"></textarea>
            <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}
