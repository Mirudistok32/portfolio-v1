import { InferActionsTypes } from "../store"


type InitialStateType = {
    isOpenNav: boolean
}

const initialState: InitialStateType = {
    isOpenNav: false
}


type ActionsTypes = InferActionsTypes<typeof actionsNavigationReducer>


export const navigationReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    return state
}


export const actionsNavigationReducer = {
    toggleOpenNavListAC: (is: boolean) => ({ type: 'NAVIGATION/TOGGLE-OPEN-NAV-LIST', payload: { is } } as const)
}