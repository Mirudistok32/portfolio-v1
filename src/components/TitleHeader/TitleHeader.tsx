import React from 'react'
import { Subtitle } from '../Subtitle/Subtitle'
import { Title } from '../Title/Title'
import s from './TitleHeader.module.scss'

type PropsType = {
    title: string
    subtitle: string
}

export const TitleHeader: React.FC<PropsType> = React.memo((props) => {

    const { title, subtitle } = props

    return (
        <div className={s.title}>
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
        </div>
    )
})