import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Images.module.scss'

type PropsType = {
    src: string,
    alt: string
}

export const Images: React.FC<PropsType> = React.memo((props) => {

    const { src, alt } = props

    return (
        <div className={s.image}>
            <NavLink className={s.image__link} to="/main" >
                <img className={s.image__photo} src={src} alt={alt} />
            </NavLink>
        </div>
    )
})