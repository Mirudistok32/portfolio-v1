import React from 'react'
import s from './ErrorPath.module.scss'

type PropsType = {
    darkColor?: boolean
    lightColor?: boolean
}

export const ErrorPath: React.FC<PropsType> = (props) => {

    const { children, darkColor, lightColor } = props

    const mainClass = [s['error-path']]
    if (darkColor && !lightColor) mainClass.push(s['dark-color'])
    if (!darkColor && lightColor) mainClass.push(s['light-color'])
    if (darkColor && lightColor) mainClass.push(s['light-color'])


    return (
        <div className={mainClass.join(' ')}>
            {children}
        </div>
    )
}