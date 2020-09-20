import React from 'react'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import s from './Contact.module.scss'


type PropsType = {

}

export const Contact: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.contact}>
            <div className={s.contact__wrap}>
                <TitleHeader
                    title={'My Contact'}
                    subtitle={'Magic ceases to exist after you understand how it works.'}
                />
            </div>
        </div>
    )
})