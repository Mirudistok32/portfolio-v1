import React from 'react'
import s from './Portfolio.module.scss'


type PropsType = {

}

export const Portfolio: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.portfolio}>
            Portfolio
        </div>
    )
})