import Axios from "axios";


//Не крадите его пожалуйста, буду сильно расстроен.
const getToken = () => {
    const _token = '951359730:AAGrNQVOTlr5qKWhyk_fKySVyxEJQ1PB7Wo'
    return _token
}

// Это тоже не воруйте. Лучше ничего тут не воруйте, волшебное слово - пожалуйста.
export const getIdChat = () => {
    const _chatId = '400864056'
    return _chatId
}


export const instance = Axios.create({
    baseURL: `https://api.telegram.org/bot${getToken()}/`
})