import React from 'react'
import style from './button.module.css'
import Link from 'next/link'

export default function Button({text,url}) {
    return (
        <Link href={url}>
            <button className={style.container}>{text}</button>
        </Link>
    )
}
