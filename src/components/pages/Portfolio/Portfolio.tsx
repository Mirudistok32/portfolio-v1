import React from 'react'
import { PortfolioInfoProjectDataType } from '../../../redux/reducers/portfolio-reducer'
import { Element } from '../../Element/Element'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import s from './Portfolio.module.scss'


type PropsType = {
    portfolioInfoProjectDatas: Array<PortfolioInfoProjectDataType>
}

export const Portfolio: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__wrap}>
                <TitleHeader
                    title={'My portfolio'}
                    subtitle={'In theory, theory and practice are inseparable. In practice, this is not the case.'}
                />
                <div className={s.portfolio__content}>
                   
                </div>
            </div>
        </div>
    )
})