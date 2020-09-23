import { FormikConfig, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { ChangeEvent, FocusEvent, UIEvent } from 'react'
import s from './ContactFeedbackForm.module.scss'

export type ContactFeedbackFormInitialValuesType = {
    name: string
    email: string
    description: string
}

type PropsType = {
    onSubmit: (values: ContactFeedbackFormInitialValuesType) => void
}

export const ContactFeedbackForm: React.FC<PropsType> = React.memo((props) => {

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
            .required()
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

    //Ничего умнее не придумал()
    const onScrollHandler = (e: UIEvent<HTMLTextAreaElement>) => {

        const scrollHeight = e.currentTarget.scrollHeight
        let height = +e.currentTarget.style.height

        if (scrollHeight > height) {
            height += (scrollHeight - height)
            e.currentTarget.style.minHeight = `${height}px`
        }
    }
    const onBluerHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value

        if (value.trim() === "") {
            e.currentTarget.style.minHeight = `50px`
        }
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
                <span className={s.form__title + ` ${formik.errors.description ? s['form__title-error'] : ''}`}>Your Comment</span>
                <textarea
                    className={s.form__description + ` ${formik.errors.name ? s['form__description-error'] : ''}`}
                    name="description"
                    onBlur={(e) => onBluerHandler(e)}
                    onScroll={(e) => onScrollHandler(e)}
                    onChange={(e) => onChangeHandlerTextarea(e)}
                    value={formik.values.description}
                />
                {
                    formik.errors.description &&
                    <span className={s['form__row-error']}>*{formik.errors.description}</span>
                }
            </label>

            <button className={s.form__button} type="submit">Send</button>
        </form>
    )
})