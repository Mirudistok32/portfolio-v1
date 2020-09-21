import Axios from "axios";


//Не крадите его пожалуйста, буду сильно расстроен.
const getToken = () => {
    const _token = '951359730:AAGrNQVOTlr5qKWhyk_fKySVyxEJQ1PB7Wo'
    return _token
}

export const instance = Axios.create({
    baseURL: `https://api.telegram.org/bot${getToken()}/`
})