import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Contact } from './Contact'
import { sendMessagesInTelegramChatThunk } from '../../../redux/reducers/contact-reducer'
import { ContactFeedbackFormInitialValuesType } from '../../../forms/ContactFeedbackForm/ContactFeedbackForm'
import { getContactArrayElements } from '../../../redux/selectors/contact-selector'

type PropsType = {

}

const ContainerContact: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch()
    const contactElements = useSelector(getContactArrayElements)
    const sendMessage = useCallback((message: string) => {
        dispatch(sendMessagesInTelegramChatThunk(message))
    }, [dispatch])

    const getDataFromForm = useCallback((values: ContactFeedbackFormInitialValuesType) => {
        const { name, description, email } = values

        const message = `Привет! Это фитбек из портфолио! { Кто написал: ${name} }
        { Её/Его email: ${email} } { Комментарий: ${description} }
        `
        sendMessage(message)

    }, [sendMessage])

    return <Contact
        onSubmitContactFeedbackForm={getDataFromForm}
        contactElements={contactElements}
    />
})


export default ContainerContact;