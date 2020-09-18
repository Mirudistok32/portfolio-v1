import React from 'react'
import s from './Navigation.module.scss'
import { DownArrowSVG } from './DownArrowSVG/DownArrowSVG'

type PropsType = {
    isOpen: boolean
    toggleOpenNavList: (is: boolean) => void
}

export const Navigation: React.FC<PropsType> = (props) => {

    const { isOpen, toggleOpenNavList } = props


    const onClickDownArrowHandler = () => {
        toggleOpenNavList(!isOpen)
    }

    return (
        <nav className={s.navigation}>
            <span>
                <DownArrowSVG
                    onClick={onClickDownArrowHandler}
                    height={45}
                    colorBody={'transparent'}
                />
            </span>
            {
                isOpen && <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            }
        </nav>
    )
}