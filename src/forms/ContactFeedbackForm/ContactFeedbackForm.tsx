import { FormikConfig, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { ChangeEvent, useState } from 'react'
import s from './ContactFeedbackForm.module.scss'

export type ContactFeedbackFormInitialValuesType = {
    name: string
    email: string
    description: string
}

type PropsType = {
    onSubmit: (values: ContactFeedbackFormInitialValuesType) => void
}

export const ContactFeedbackForm: React.FC<PropsType> = (props) => {

    const { onSubmit } = props

    const maxLinkLength = 50
    const maxNameLength = 24
    const maxDescriptionLength = 300

    const validationSchemaYup = Yup.object({
        name: Yup
            .string()
            .required()
            .max(maxNameLength, `Max count symbols ${maxNameLength}`),
        email: Yup
            .string()
            .email()
            .max(maxLinkLength, `Max count symbols ${maxLinkLength}`),
        description: Yup
            .string()
            .max(maxDescriptionLength, `Max count symbols ${maxDescriptionLength}`)
    })

    const formikConfig: FormikConfig<ContactFeedbackFormInitialValuesType> = {
        initialValues: {
            name: "",
            email: "",
            description: ""
        },
        onSubmit: (values, { resetForm }) => {
            onSubmit(values)
            resetForm()
        },
        validationSchema: validationSchemaYup,
    }
    const formik = useFormik(formikConfig)

    const onChangeHandlerTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        formik.handleChange(e)
    }

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <label className={s.form__row}>
                <span className={s.form__title + ` ${formik.errors.name ? s['form__title-error'] : ''}`}>Your name</span>
                <input
                    className={s.form__name + ` ${formik.errors.name ? s['form__name-error'] : ''}`}
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {
                    formik.errors.name &&
                    <span className={s['form__row-error']}>*{formik.errors.name}</span>
                }
            </label>
            <label className={s.form__row}>
                <span className={s.form__title}>Your email</span>
                <input
                    className={s.form__email}
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {
                    formik.errors.email &&
                    <span className={s['form__row-error']}>*{formik.errors.email}</span>
                }
            </label>
            <label className={s.form__row}>
                <span className={s.form__title}>Your Comment</span>
                <textarea
                    className={s.form__description}
                    name="description"
                    onChange={(e) => onChangeHandlerTextarea(e)}
                    value={formik.values.description}
                />
            </label>

            <button className={s.form__button} type="submit">Send</button>
        </form>
    )
}