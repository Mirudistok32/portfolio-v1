import React from 'react'
import s from './Navigation.module.scss'
import { DownArrowSVG } from './DownArrowSVG/DownArrowSVG'

type PropsType = {
    isOpen: boolean
    navElements: Array<string>
    toggleOpenNavList: (is: boolean) => void
}

export const Navigation: React.FC<PropsType> = (props) => {

    // Вытаскиваем свойства из пропса
    const { isOpen, toggleOpenNavList, navElements } = props

    // переменные для классов
    const listClass = [s.navigation__list]
    const listButtonClass = [s.navigation__btn]
    const listElementClass = [s['navigation__list-element']]

    // Выводим список элементов
    const elements = navElements.map(item => {
        return (
            <li
                key={item + 1}
                className={listElementClass.join(' ')}>
                {item}
            </li>
        )
    })

    // Функции и колбэки
    const onClickDownArrowHandler = () => {
        toggleOpenNavList(!isOpen)
    }

    // Какие-то условные действия с классами
    // listClass
    if (isOpen) listClass.push(s['navigation__list-active'])
    if (isOpen) listButtonClass.push(s['navigation__btn-active'])

    return (
        <nav className={s.navigation}>
            <span className={listButtonClass.join(' ')}>
                <DownArrowSVG
                    onClick={onClickDownArrowHandler}
                    height={30}
                    colorArrow={isOpen ? 'lightseagreen' : 'snow'}
                    colorBody={'transparent'}
                />
            </span>
            {
                <ul className={listClass.join(' ')}>
                    {
                        elements
                    }
                </ul>
            }
        </nav>
    )
}