import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Button from '@/companets/Button/button'

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          fill={true}
          className={style.img}
        />
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>About Us</h1>
          <h2 className={style.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who Are We?</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Adipisci modi deserunt quis velit quo neque molestias
            esse molestiae asperiores facilis. Labore vero
            qui id ipsa necessitatibus sit porro accusamus officiis!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto laudantium eveniet dolore
            soluta odio ullam exercitationem earum quia totam quod!
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}>What We Do?</h1>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde perferendis
             amet architecto in ut iste.
             <br />
              <br />
            -Dolore veritatis dicta explicabo provident eum quod voluptatum doloribus!
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}
