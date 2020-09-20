import React from 'react'
import { useSelector } from 'react-redux'
import { Portfolio } from './Portfolio'
import { getPortfolioInfoProjectDatasSelector } from '../../../redux/selectors/portfolio-selector'

type PropsType = {

}

const ContainerPortfolio: React.FC<PropsType> = React.memo((props) => {

    const portfolioInfoProjectDatas = useSelector(getPortfolioInfoProjectDatasSelector)

    return <Portfolio portfolioInfoProjectDatas={portfolioInfoProjectDatas} />
})

export default ContainerPortfolio