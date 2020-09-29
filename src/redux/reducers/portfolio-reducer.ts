import { v4 } from "uuid"
import { InferActionsTypes } from "../store"
import clickMeGame from '../../assets/images/projects/click-me-game.webp'
import incrementWay from '../../assets/images/projects/increment-way.webp'
import generatorPassword from '../../assets/images/projects/generator-password.webp'

export type PortfolioInfoListDataType = {
    keyTitle: string
    valueTitle: string
    isLink?: boolean
    link?: string
    id: string
}

export type PortfolioInfoProjectDataType = {
    mainTitle: string
    id: string
    listsInfo: Array<PortfolioInfoListDataType>
    urlImages: string
    linkImages: string
}

type InitialStateType = {
    portfolioInfoProjectDatas: Array<PortfolioInfoProjectDataType>
}

const initialState: InitialStateType = {
    portfolioInfoProjectDatas: [
        {
            mainTitle: "Generator Password",
            id: v4(),
            listsInfo: [
                {
                    keyTitle: "Link",
                    valueTitle: "https://mirudistok32.github.io/generator-password/",
                    isLink: true,
                    link: "https://mirudistok32.github.io/generator-password/",
                    id: v4(),
                },
                {
                    keyTitle: "GitHub",
                    valueTitle: "https://github.com/Mirudistok32/generator-password",
                    isLink: true,
                    link: "https://github.com/Mirudistok32/generator-password",
                    id: v4(),
                },
                {
                    keyTitle: "Description",
                    valueTitle: "Generator Password - быстрый способ создать хороший пароль.",
                    id: v4(),
                },
                {
                    keyTitle: "Technologies",
                    valueTitle: "#reduxToolkit, #immer, #react, #javascript, #typescript #html, #css, #hooks, #scss, #memo",
                    id: v4(),
                },
            ],
            urlImages: generatorPassword,
            linkImages: "https://mirudistok32.github.io/generator-password/"
        },
        {
            mainTitle: "ClickMeGame",
            id: v4(),
            listsInfo: [
                {
                    keyTitle: "Link",
                    valueTitle: "https://mirudistok32.github.io/ClickMeGame/",
                    isLink: true,
                    link: "https://mirudistok32.github.io/ClickMeGame/",
                    id: v4(),
                },
                {
                    keyTitle: "GitHub",
                    valueTitle: "https://github.com/Mirudistok32/ClickMeGame/",
                    isLink: true,
                    link: "https://github.com/Mirudistok32/ClickMeGame/",
                    id: v4(),
                },
                {
                    keyTitle: "Description",
                    valueTitle: "ClickMeGame - это мини-игра, цель которой узнать, сколько вы успеете кликнуть по кнопке 'Click' за 10 секунд",
                    id: v4(),
                },
                {
                    keyTitle: "Technologies",
                    valueTitle: "#react, #javascript, #typescript #html, #css, #hooks, #sass",
                    id: v4(),
                },
            ],
            urlImages: clickMeGame,
            linkImages: "https://mirudistok32.github.io/ClickMeGame/"
        },
        {
            mainTitle: "Increment Way",
            id: v4(),
            listsInfo: [
                {
                    keyTitle: "Link",
                    valueTitle: "https://mirudistok32.github.io/SamuraiWayIncrement/",
                    isLink: true,
                    link: "https://mirudistok32.github.io/SamuraiWayIncrement/",
                    id: v4(),
                },
                {
                    keyTitle: "GitHub",
                    valueTitle: "https://github.com/Mirudistok32/SamuraiWayIncrement",
                    isLink: true,
                    link: "https://github.com/Mirudistok32/SamuraiWayIncrement",
                    id: v4(),
                },
                {
                    keyTitle: "Description",
                    valueTitle: "Increment Way - это простой счетчик, в котором можно увеличивать число на дисплеи в большую строну. Так же есть возможность задать свой интервал значений.",
                    id: v4(),
                },
                {
                    keyTitle: "Technologies",
                    valueTitle: "#react, #javascript, #html, #css, #hooks, #typescript, #sass, #react-router-dom",
                    id: v4(),
                },
            ],
            urlImages: incrementWay,
            linkImages: "https://mirudistok32.github.io/SamuraiWayIncrement/"
        },
    ],
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