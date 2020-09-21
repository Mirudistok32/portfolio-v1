import React from 'react'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import { ContactFeedbackForm, ContactFeedbackFormInitialValuesType } from '../../../forms/ContactFeedbackForm/ContactFeedbackForm'
import s from './Contact.module.scss'


type PropsType = {
    onSubmitContactFeedbackForm: (values: ContactFeedbackFormInitialValuesType) => void
}

export const Contact: React.FC<PropsType> = React.memo((props) => {

    const { onSubmitContactFeedbackForm } = props

    return (
        <div className={s.contact}>
            <div className={s.contact__wrap}>
                <TitleHeader
                    title={'My сontact'}
                    subtitle={'Magic ceases to exist after you understand how it works.'}
                />
                <div className={s.contact__content}>
                    <ul className={s.contact__mainlinks}>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>Telegram</span>
                            <a href={'https://t.me/mirudistok'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                t.me/mirudistok
                            </a>
                        </li>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>Vk</span>
                            <a href={'https://vk.com/mirudistok'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                vk.com/mirudistok
                            </a>
                        </li>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>Instagram</span>
                            <a href={' https://www.instagram.com/postnikov_st/'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                instagram.com/postnikov_st/
                            </a>
                        </li>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>Linkedin</span>
                            <a href={'https://www.linkedin.com/in/stanislav-postnikov-6220331b7/'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/stanislav-postnikov-6220331b7/
                            </a>
                        </li>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>Twitter</span>
                            <a href={'https://twitter.com/postnikov_st'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                https://twitter.com/postnikov_st
                            </a>
                        </li>
                        <li className={s.contact__link}>
                            <span className={s['contact__link-span']}>GutHub</span>
                            <a href={'https://github.com/mirudistok32'} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                                github.com/mirudistok32
                            </a>
                        </li>
                    </ul>
                    <div className={s.contact__form}>
                        <div className={s['contact__form-title']}>
                            If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
                        </div>
                        <ContactFeedbackForm onSubmit={onSubmitContactFeedbackForm} />
                    </div>
                </div>
            </div>
        </div>
    )
})