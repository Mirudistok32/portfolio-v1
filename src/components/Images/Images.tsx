import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Images.module.scss'

type PropsType = {
    src: string,
    alt?: string,
    title?: string,
    link: string
}

export const Images: React.FC<PropsType> = React.memo((props) => {

    const { src, alt, title, link } = props

    return (
        <div className={s.image}>
            <NavLink className={s.image__link} to={link} title={title}>
                <img className={s.image__photo} src={src} alt={alt} />
            </NavLink>
        </div>
    )
})