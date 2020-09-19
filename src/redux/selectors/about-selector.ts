import { AppStateType } from '../store'


export const getAboutInfoDatesSelector = (state: AppStateType) => state.aboutReducer.infoDates
export const getListSkillsDatesSelector = (state: AppStateType) => state.aboutReducer.listSkillsDates

