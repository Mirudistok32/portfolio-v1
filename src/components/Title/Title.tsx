import React, { useMemo } from 'react'
import s from './Title.module.scss'

type PropsType = {
    title: string
}

export const Title: React.FC<PropsType> = React.memo((props) => {

    const { title } = props

    const renderFirstWord = useMemo(() => title.split(' ').slice(0, 1) + " ", [title])
    const renderSecondWord = useMemo(() => title.split(' ').slice(1), [title])

    return (
        <div className={s.title}>
            <span className={s.title__first}>
                {renderFirstWord}
            </span>
            <span className={s.title__second}>
                {renderSecondWord}
            </span>
        </div>
    )
})