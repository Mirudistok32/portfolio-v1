import { PATH } from "../../Route"
import { InferActionsTypes } from "../store"

export type NavElementType = {
    title: string
    link: string
}

type InitialStateType = {
    isOpenNav: boolean
    navElements: Array<NavElementType>
}

const initialState: InitialStateType = {
    isOpenNav: false,
    // Не забыть изменить переменную в _variable.scss ($countNavigationElement)
    navElements: [
        { title: 'Home', link: PATH.home },
        { title: 'About', link: PATH.about },
        { title: 'Portfolio', link: PATH.portfolio },
        { title: 'Contact', link: PATH.contact },
    ]
}


type ActionsTypes = InferActionsTypes<typeof actionsNavigationReducer>


export const navigationReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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