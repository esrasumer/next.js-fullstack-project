import Image from 'next/image'
import style from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/companets/Button/button'

export default function Home() {
  return (
    <div  className={style.container}>
      <div className={style.item}>
        <h1  className={style.title}>Better design for your digital products.</h1>
        <p  className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque!
        </p>
        <Button url="/portfolio" className={style.button} text='See Our Works'/>
      </div>
      <div className={style.item}>
      <Image src={Hero} height={500} weight={500} alt='' className={style.img}/>
      </div>
    </div>
  )
}
