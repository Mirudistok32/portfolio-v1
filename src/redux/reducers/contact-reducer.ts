import { AppStateType } from './../store';
import { ThunkAction } from "redux-thunk"
import { sendMessagesApi } from "../../api/send-messages-api"
import { InferActionsTypes } from "../store"
import { v4 } from 'uuid';

export type ContantElementType = {
    id: string
    title: string
    link: string
    linkTitle: string
}

type InitialStateType = {
    isLoading: boolean
    contactElements: Array<ContantElementType>
}

const initialState: InitialStateType = {
    isLoading: false,
    contactElements: [
        {
            id: v4(),
            title: "Telegram",
            linkTitle: "t.me/mirudistok",
            link: "https://t.me/mirudistok",
        },
        {
            id: v4(),
            title: "Vk",
            linkTitle: "vk.com/postnikov_st",
            link: "https://vk.com/postnikov_st",
        },
        {
            id: v4(),
            title: "Instagram",
            linkTitle: "instagram.com/postnikov_st",
            link: "https://www.instagram.com/postnikov_st/",
        },
        {
            id: v4(),
            title: "Linkedin",
            linkTitle: "linkedin.com/in/stanislav-postnikov-6220331b7/",
            link: "https://www.linkedin.com/in/stanislav-postnikov-6220331b7/",
        },
        // {
        //     id: v4(),
        //     title: "Twitter",
        //     linkTitle: "https://twitter.com/postnikov_st",
        //     link: "https://twitter.com/postnikov_st",
        // },
        {
            id: v4(),
            title: "GitHub",
            linkTitle: "github.com/mirudistok32",
            link: "https://github.com/mirudistok32",
        },
    ],
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
