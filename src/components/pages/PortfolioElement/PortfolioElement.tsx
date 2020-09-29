import React, { useMemo } from 'react'
import { Element } from '../../Element/Element'
import s from './PortfolioElement.module.scss'
import { PortfolioInfoListDataType } from '../../../redux/reducers/portfolio-reducer'

type PropsType = {
    mainTitle: string
    id?: string
    listsInfo: Array<PortfolioInfoListDataType>
    urlImages: string
    linkImage: string
}

export const PortfolioElement: React.FC<PropsType> = React.memo((props) => {

    const {
        mainTitle,
        listsInfo,
        urlImages,
        linkImage } = props

    const renderElement = useMemo(() => listsInfo.map(l => {
        return <Element
            key={l.id}
            title={l.keyTitle}
            value={l.valueTitle}
            isLink={l.isLink}
            link={l.link}
        />
    }), [listsInfo])


    return (
        <div className={s['portfolio__element']}>
            <div className={s['portfolio__element-title']}>{mainTitle}</div>
            <div className={s['portfolio__element-wrap']}>
                <div className={s['portfolio__element-info']}>
                    {
                        renderElement
                    }
                </div>
                <div className={s['portfolio__element-canvas']}>
                    <a href={linkImage} target="_blank" rel="noopener noreferrer">
                        <img src={urlImages} alt="avatar" />
                    </a>
                </div>
            </div>
        </div>
    )
})