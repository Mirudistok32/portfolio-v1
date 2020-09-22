import { AppStateType } from '../store'

export const getContactArrayElements = (state: AppStateType) => state.contactReducer.contactElements

