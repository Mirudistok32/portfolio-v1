import { v4 } from "uuid"
import { InferActionsTypes } from "../store"

export type InfoDataType = {
    key: string
    value: string
    id: string
}

export type StackSkillsType = {

}

type InitialStateType = {
    infoDates: Array<InfoDataType>
}

const initialState: InitialStateType = {
    infoDates: [
        { key: 'First Name', value: 'Stanislav', id: v4() },
        { key: 'Last Name', value: 'Postnikov', id: v4() },
        { key: 'Birthdate', value: '31 may 1996', id: v4() },
        { key: 'Phone', value: '+7 951 659 01 65', id: v4() },
        { key: 'Nationality', value: 'Russion', id: v4() },
        { key: 'Adress', value: 'Sankt-Petersburg', id: v4() },
        { key: 'Experience', value: '1 year', id: v4() },
        { key: 'Langages', value: 'Russion, English', id: v4() },
        { key: 'Email', value: 'mirudistok32@gmail.com', id: v4() },
        { key: 'Vk', value: 'https://vk.com/mirudistok', id: v4() },
        { key: 'Telegram', value: 'https://t.me/mirudistok', id: v4() }
    ]
}


type ActionsTypes = InferActionsTypes<typeof actionsNavigationReducer>


export const aboutReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'NAVIGATION/TOGGLE-OPEN-NAV-LIST': {
            return {
                ...state, ...action.payload
            }
        }
        default: {
            return state
        }
    }

}


export const actionsNavigationReducer = {
    toggleOpenNavListAC: (is: boolean) => ({ type: 'NAVIGATION/TOGGLE-OPEN-NAV-LIST', payload: { isOpenNav: is } } as const)
}