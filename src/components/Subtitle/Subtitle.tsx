import React from 'react'
import s from './Subtitle.module.scss'

type PropsType = {
    subtitle: string
}

export const Subtitle: React.FC<PropsType> = React.memo((props) => {

    const { subtitle } = props

    return (
        <div className={s.title}>
            <span className={s.title__line}></span>
            <span className={s.title__text}>
                {subtitle}
            </span>
            <span className={s.title__line}></span>
        </div>
    )
})