import { FormikConfig, useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
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

    const validationSchemaYup = Yup.object({

    })

    const formikConfig: FormikConfig<ContactFeedbackFormInitialValuesType> = {
        initialValues: {
            name: "",
            email: "",
            description: ""
        },
        onSubmit: (values) => {
            onSubmit(values)
        },
        validationSchema: validationSchemaYup
    }
    const formik = useFormik(formikConfig)

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <label className={s.form__row}>
                <span className={s.form__title}></span>
                <input
                    className={s.form__name}
                    type="text"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </label>
            <label className={s.form__row}>
                <span className={s.form__title}></span>
                <input
                    className={s.form__email}
                    type="text"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </label>
            <label className={s.form__row}>
                <span className={s.form__title}></span>
                <textarea
                    className={s.form__description}
                    name="description"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
            </label>

            <button className={s.form__button} type="submit">Кликни</button>
        </form>
    )
}