import React from 'react'
import s from './Navigation.module.scss'
import { DownArrowSVG } from './DownArrowSVG/DownArrowSVG'

type PropsType = {

}

export const Navigation: React.FC<PropsType> = (props) => {


    return (
        <nav className={s.navigation}>
            <span>
                <DownArrowSVG />
            </span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}