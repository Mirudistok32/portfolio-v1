import { AppStateType } from '../store'

export const getNavigationIsOpenSelect = (state: AppStateType) => state.navigationReducer.isOpenNav
export const getNavigationNavElementsSelect = (state: AppStateType) => state.navigationReducer.navElements