import React, { useMemo } from 'react'
import s from './Navigation.module.scss'
import { DownArrowSVG } from './DownArrowSVG/DownArrowSVG'
import { NavLink } from 'react-router-dom'
import { NavElementType } from '../../redux/reducers/navigation-reducer'
import { v4 } from 'uuid'


type PropsType = {
    isOpen: boolean
    navElements: Array<NavElementType>
    toggleOpenNavList: (is: boolean) => void
}

export const Navigation: React.FC<PropsType> = React.memo((props) => {

    // Вытаскиваем свойства из пропса
    const { isOpen, toggleOpenNavList, navElements } = props

    // переменные для классов
    const listClass = [s.navigation__list]
    const listButtonClass = [s.navigation__btn]
    const listElementClass = [s['navigation__list-element']]

    // Выводим список элементов
    const elements = useMemo(() => navElements.map(item => {
        return (
            <li
                key={v4()}
            >
                <NavLink
                    className={listElementClass.join(' ')}
                    to={item.link}
                    activeClassName={s['navigation__list-element-active']}
                >
                    {item.title.toLocaleUpperCase()}
                </NavLink>
            </li>
        )
    }), [listElementClass, navElements])

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
            <span
                className={listButtonClass.join(' ')}
            >
                <DownArrowSVG
                    onClick={onClickDownArrowHandler}
                    classNameForArrow={isOpen ? s.color : ''}
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
})