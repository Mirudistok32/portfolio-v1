import React from 'react'
import s from './Contact.module.scss'


type PropsType = {

}

export const Contact: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.contact}>
            Contact
        </div>
    )
})