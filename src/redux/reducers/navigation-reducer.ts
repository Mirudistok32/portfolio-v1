import { InferActionsTypes } from "../store"


type InitialStateType = {
    isOpenNav: boolean
    navElements: Array<string>
}

const initialState: InitialStateType = {
    isOpenNav: false,
    navElements: ['Home', 'About', 'Portfolio', 'Contact']
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