import { getIdChat, instance } from './api-settings';



export const sendMessagesApi = {
    sendMessage: (message: string) => {
        return instance.post(`sendMessage?chat_id=${getIdChat()}text=${message}`)
            .then(data => {
                if (data.status > 400) {
                    throw Error('Что-то пошло не так, статус ошибки больше 400')
                } else if (data.statusText !== 'OK') {
                    throw Error('data.statusText !== `OK`')
                }
                return data.data
            })
            .catch(e => {
                console.log('Ошибка в POST запросе, в sendMessagesApi метода sendMessage')
                console.log("Ошибка/Error: " + e)
            })
    },
}