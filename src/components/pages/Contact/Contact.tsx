import React, { useState } from 'react'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import s from './Contact.module.scss'


type PropsType = {

}

export const Contact: React.FC<PropsType> = React.memo((props) => {

    const [value, setValue] = useState('')


    const onClickHandler = () => {
        fetch(`https://api.telegram.org/bot951359730:AAGrNQVOTlr5qKWhyk_fKySVyxEJQ1PB7Wo/sendMessage?chat_id=400864056&text=${value}?`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    }

    return (
        <div className={s.contact}>
            <div className={s.contact__wrap}>
                <TitleHeader
                    title={'My сontact'}
                    subtitle={'Magic ceases to exist after you understand how it works.'}
                />
                <div className={s.contact__content}>
                    <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                    <button onClick={onClickHandler}>send</button>
                </div>
            </div>
        </div>
    )
})