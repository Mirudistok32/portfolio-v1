import { AppStateType } from './../store';
import { ThunkAction } from "redux-thunk"
import { sendMessagesApi } from "../../api/send-messages-api"
import { InferActionsTypes } from "../store"


type InitialStateType = {
    isLoading: boolean
}

const initialState: InitialStateType = {
    isLoading: false
}


type ActionsTypes = InferActionsTypes<typeof actionsContactReducer>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const contactReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'MIR/CONTACT/IS_LOADING': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }

}


export const actionsContactReducer = {
    setIsLoadingAC: (is: boolean) => {
        return {
            type: 'MIR/CONTACT/IS_LOADING',
            payload: {
                isLoading: is
            }
        } as const
    }
}

export const sendMessagesInTelegramChatThunk = (message: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actionsContactReducer.setIsLoadingAC(true))
        await sendMessagesApi.sendMessage(message)
        // console.log(statusData.data)
        dispatch(actionsContactReducer.setIsLoadingAC(true))
    }
}
