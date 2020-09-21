import { FormikConfig, useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import s from './ContactFeedbackForm.module.scss'

type PropsType = {

}

export const ContactFeedbackForm: React.FC<PropsType> = (props) => {

    const { } = props

    type InitialValuesType = {

    }

    const validationSchemaYup = Yup.object({

    })

    const formikConfig: FormikConfig<InitialValuesType> = {
        initialValues: {},
        onSubmit: (values) => { },
        validationSchema: validationSchemaYup
    }
    const formik = useFormik(formikConfig)

    return (
        <form className={s.form}>
            <label className={s.form__name}>
                <span></span>
                <input
                    type="text"
                />
            </label>
            <label className={s.form__email}>
                <span></span>
                <input
                    type="text"
                />
            </label>
            <label className={s.form__description}>
                <span></span>
                <textarea
                />
            </label>

            <button className={s.form__button} type="submit"></button>
        </form>
    )
}