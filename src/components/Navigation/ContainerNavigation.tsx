import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation } from './Navigation'
import { getNavigationIsOpenSelect, getNavigationNavElementsSelect } from '../../redux/selectors/navigation-selector'
import { actionsNavigationReducer } from '../../redux/reducers/navigation-reducer'


type PropsType = {

}

export const ContainerNavigation: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const isOpen = useSelector(getNavigationIsOpenSelect)
    const navElements = useSelector(getNavigationNavElementsSelect)

    const toggleOpenNavList = useCallback((is: boolean) => dispatch(actionsNavigationReducer.toggleOpenNavListAC(is)), [dispatch])


    return (
        <Navigation
            isOpen={isOpen}
            navElements={navElements}
            toggleOpenNavList={toggleOpenNavList}
        />
    )
}