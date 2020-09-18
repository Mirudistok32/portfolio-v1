import { AppStateType } from '../store'

export const selectIsOpen = (state: AppStateType) => state.navigationReducer.isOpenNav