import { v4 } from "uuid"
import { InferActionsTypes } from "../store"


type InitialStateType = {
    
}

const initialState: InitialStateType = {
   
}


type ActionsTypes = InferActionsTypes<typeof actionsContactReducer>


export const contactReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }

}


export const actionsContactReducer = {

}