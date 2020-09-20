import React from 'react'
import s from './Element.module.scss'

type PropsType = {
    title: string
    value: string
}


export const Element: React.FC<PropsType> = React.memo((props) => {

    const { title, value } = props

    return (
        <li className={s.element}>
            {title}
            <span>{value}</span>
        </li>
    )
})
