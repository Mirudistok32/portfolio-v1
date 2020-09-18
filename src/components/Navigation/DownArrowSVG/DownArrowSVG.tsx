import React, { MouseEvent, useMemo } from 'react'
import s from './DownArrowSVG.module.scss'

type PropsType = {
    colorArrow?: string
    colorBody?: string
    height?: number
    weigth?: number
    classNameForBody?: string
    classNameForArrow?: string
    onClick?: (e: MouseEvent<SVGSVGElement>) => void
}

export const DownArrowSVG: React.FC<PropsType> = React.memo((props) => {

    const {
        colorArrow = '#FAFAFA',
        colorBody = '#2196F3',
        onClick,
        height,
        weigth,
        classNameForArrow,
        classNameForBody
    } = props

    const classMain = useMemo(() => { return [s['down-arrow']] }, [])
    const classArrow = useMemo(() => { return [s['down-arrow__arw']] }, [classNameForArrow])
    const classBody = useMemo(() => { return [s['down-arrow__body']] }, [classNameForBody])

    // const classMain = [s['down-arrow']]
    // const classArrow = [s['down-arrow__arw']]
    // const classBody = [s['down-arrow__body']]

    const onClickHandler = (e: MouseEvent<SVGSVGElement>) => {
        onClick && onClick(e)
    }

    if (classNameForArrow) classArrow.push(classNameForArrow)
    if (classNameForBody) classArrow.push(classNameForBody)

    return (
        <svg
            className={classMain.join(' ')}
            onClick={onClickHandler}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.667 490.667"
            height={height}
            width={weigth}
        >
            <path
                className={classBody.join('')}
                fill={colorBody}
                d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	            s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"
            />
            <path
                className={classArrow.join('')}
                fill={colorArrow}
                d="M317.867,221.867l-19.2,19.2V117.333c0-29.455-23.878-53.333-53.333-53.333S192,87.878,192,117.333
                v123.584l-19.2-19.2c-19.139-18.289-49.277-18.289-68.416,0c-18.889,18.894-18.889,49.522,0,68.416l118.251,118.251
                c12.496,12.492,32.752,12.492,45.248,0l118.251-118.251c18.889-18.894,18.889-49.522,0-68.416
                C366.975,203.565,336.946,203.631,317.867,221.867z"
            />
        </svg>
    )
})