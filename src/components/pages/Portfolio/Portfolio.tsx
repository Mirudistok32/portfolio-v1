import React, { useMemo } from 'react'
import { PortfolioInfoProjectDataType } from '../../../redux/reducers/portfolio-reducer'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import { PortfolioElement } from '../PortfolioElement/PortfolioElement'
import s from './Portfolio.module.scss'


type PropsType = {
    portfolioInfoProjectDatas: Array<PortfolioInfoProjectDataType>
}

export const Portfolio: React.FC<PropsType> = React.memo((props) => {

    const { portfolioInfoProjectDatas } = props

    const renderElements = useMemo(() => portfolioInfoProjectDatas.map(elem => {

        const { id, listsInfo, mainTitle, urlImages, linkImages } = elem

        return <PortfolioElement
            key={id}
            urlImages={urlImages}
            listsInfo={listsInfo}
            mainTitle={mainTitle}
            linkImage={linkImages}
        />
    }), [portfolioInfoProjectDatas])

    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__wrap}>
                <TitleHeader
                    title={'My portfolio'}
                    subtitle={'In theory, theory and practice are inseparable. In practice, this is not the case.'}
                />
                <div className={s.portfolio__content}>
                    {
                        renderElements
                    }
                </div>
            </div>
        </div>
    )
})