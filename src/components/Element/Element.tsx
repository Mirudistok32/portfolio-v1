import React from 'react'
import s from './Element.module.scss'

type PropsType = {
    id: string
    key: string
    value: string
}


export const Element: React.FC<PropsType> = (props) => {

    const { id, key, value } = props

    return (
        <li
            key={id}
            className={s.element}
        >
            {key}
            <span>{value}</span>
        </li>
    )
}
