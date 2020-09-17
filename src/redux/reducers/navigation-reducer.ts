import { InferActionsTypes } from "../store"


type InitialStateType = {

}

const initialState: InitialStateType = {

}


type ActionsTypes = InferActionsTypes<typeof actionsNavigationReducer>


export const navigationReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    return state
}


export const actionsNavigationReducer = {

}