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
                    <ContactFeedbackForm onSubmit={onSubmitContactFeedbackForm} />
                </div>
            </div>
        </div>
    )
})