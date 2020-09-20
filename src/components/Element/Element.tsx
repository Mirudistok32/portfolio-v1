import React from 'react'
import s from './Element.module.scss'

type PropsType = {
    title: string
    value: string
    isLink?: boolean
    link?: string
}


export const Element: React.FC<PropsType> = React.memo((props) => {

    const { title, value, isLink, link } = props

    return (
        <li className={s.element}>
            {title}
            {
                isLink ? <a href={link} target="_blank" rel="noopener noreferrer">{value}</a> : <span>{value}</span>
            }
        </li>
    )
})
