import React from 'react'
import { useDispatch } from 'react-redux'
import { Contact } from './Contact'
import { sendMessagesInTelegramChatThunk } from '../../../redux/reducers/contact-reducer'

type PropsType = {

}

const ContainerContact: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch()
    const sendMessage = (message: string) => {
        dispatch(sendMessagesInTelegramChatThunk(message))
    }

    return <Contact sendMessage={sendMessage}/>
})


export default ContainerContact;