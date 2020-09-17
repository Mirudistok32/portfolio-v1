import React from 'react'
import s from './DownArrowSVG.module.scss'

type PropsType = {
    colorArrow?: string
    colorBody?: string
}

export const DownArrowSVG: React.FC<PropsType> = React.memo((props) => {

    const { colorArrow = '#FAFAFA', colorBody = '#2196F3' } = props

    const classMain = [s['down-arrow']]

    return (
        <svg className={classMain.join(' ')}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.667 490.667">
            <path
                fill={colorBody}
                d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	            s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"
            />
            <path
                fill={colorArrow}
                d="M317.867,221.867l-19.2,19.2V117.333c0-29.455-23.878-53.333-53.333-53.333S192,87.878,192,117.333
                v123.584l-19.2-19.2c-19.139-18.289-49.277-18.289-68.416,0c-18.889,18.894-18.889,49.522,0,68.416l118.251,118.251
                c12.496,12.492,32.752,12.492,45.248,0l118.251-118.251c18.889-18.894,18.889-49.522,0-68.416
                C366.975,203.565,336.946,203.631,317.867,221.867z"
            />
        </svg>
    )
})