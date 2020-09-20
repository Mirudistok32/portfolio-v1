import React, { useMemo } from 'react'
import { Element } from '../../Element/Element'
import s from './PortfolioElement.module.scss'
import { PortfolioInfoListDataType } from '../../../redux/reducers/portfolio-reducer'

type PropsType = {
    mainTitle: string
    id: string
    listsInfo: Array<PortfolioInfoListDataType>
    iframeLink: string
    iframeTitle: string
}

export const Portfolio: React.FC<PropsType> = React.memo((props) => {

    const {
        mainTitle,
        id,
        listsInfo,
        iframeLink,
        iframeTitle, } = props

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
                    <iframe allowFullScreen src={iframeLink} title={iframeTitle} />
                </div>
            </div>
        </div>
    )
})