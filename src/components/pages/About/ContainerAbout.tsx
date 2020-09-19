import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { InfoDataType, ListSkillsDataType } from '../../../redux/reducers/about-reducer'
import { AppStateType } from '../../../redux/store'
import { About } from './About'
import { getAboutInfoDatesSelector, getListSkillsDatesSelector } from '../../../redux/selectors/about-selector'

type MapStateType = {
    infoDates: Array<InfoDataType>
    listSkillsDates: Array<ListSkillsDataType>
}
type MapDispatchType = {}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType

const ContainerAbout: React.FC<PropsType> = React.memo((props) => {

    const { infoDates, listSkillsDates } = props

    return <About
        infoDates={infoDates}
        listSkillsDates={listSkillsDates}
    />
})

const mapState = (state: AppStateType): MapStateType => ({
    infoDates: getAboutInfoDatesSelector(state),
    listSkillsDates: getListSkillsDatesSelector(state)
})

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapState, {
        //dispatch
    })
)(ContainerAbout)