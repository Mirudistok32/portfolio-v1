import { v4 } from "uuid"
import { InferActionsTypes } from "../store"


export type PortfolioInfoProjectDataType = {
    mainTitle: string
    id: string
    keyTitle: string
    valueTitle: string
    isLink?: boolean
    link?: string
    iframeLink: string
    iframeTitle: string
}

type InitialStateType = {
    portfolioInfoProjectDatas: Array<PortfolioInfoProjectDataType>
}

const initialState: InitialStateType = {
    portfolioInfoProjectDatas: [
        {
            mainTitle: "ClickMeGame",
            id: v4(),
            keyTitle: "Link",
            valueTitle: "https://mirudistok32.github.io/ClickMeGame/",
            isLink: true,
            link: "https://mirudistok32.github.io/ClickMeGame/",
            iframeTitle: "ClickMeGame",
            iframeLink: "https://mirudistok32.github.io/ClickMeGame/"
        }
    ]
}


type ActionsTypes = InferActionsTypes<typeof actionsPortfolioReducer>


export const portfolioReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }

}


export const actionsPortfolioReducer = {

}