import React, { useMemo } from 'react'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import { ContactFeedbackForm, ContactFeedbackFormInitialValuesType } from '../../../forms/ContactFeedbackForm/ContactFeedbackForm'
import s from './Contact.module.scss'
import { ContantElementType } from '../../../redux/reducers/contact-reducer'


type PropsType = {
    onSubmitContactFeedbackForm: (values: ContactFeedbackFormInitialValuesType) => void
    contactElements: Array<ContantElementType>
}

export const Contact: React.FC<PropsType> = React.memo((props) => {

    const { onSubmitContactFeedbackForm, contactElements } = props

    const renderContactElements = useMemo(() => contactElements.map((element) => {
        return (
            <li key={element.id} className={s.contact__link}>
                <span className={s['contact__link-span']}>{element.title}</span>
                <a href={element.link} className={s['contact__link-a']} target="_blank" rel="noopener noreferrer">
                    {element.linkTitle}
                </a>
            </li>
        )
    }), [contactElements])

    return (
        <div className={s.contact}>
            <div className={s.contact__wrap}>
                <TitleHeader
                    title={'My сontact'}
                    subtitle={'Magic ceases to exist after you understand how it works.'}
                />
                <div className={s.contact__content}>
                    <ul className={s.contact__mainlinks}>
                        {
                            renderContactElements
                        }
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