import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation } from './Navigation'
import { getNavigationIsOpenSelect, getNavigationNavElementsSelect } from '../../redux/selectors/navigationSelector'
import { actionsNavigationReducer } from '../../redux/reducers/navigation-reducer'

type OwnerProps = {

}

type PropsType = OwnerProps

export const ContainerNavigation: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const isOpen = useSelector(getNavigationIsOpenSelect)
    const navElements = useSelector(getNavigationNavElementsSelect)

    const toggleOpenNavList = (is: boolean) => dispatch(actionsNavigationReducer.toggleOpenNavListAC(is))


    return (
        <Navigation
            isOpen={isOpen}
            navElements={navElements}
            toggleOpenNavList={toggleOpenNavList}
        />
    )
}