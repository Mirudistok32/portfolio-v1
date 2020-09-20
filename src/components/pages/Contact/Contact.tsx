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
                    title={'My сontact'}
                    subtitle={'Magic ceases to exist after you understand how it works.'}
                />
                <div className={s.contact__content}>

                </div>
            </div>
        </div>
    )
})