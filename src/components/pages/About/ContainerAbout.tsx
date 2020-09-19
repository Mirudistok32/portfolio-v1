import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { InfoDataType } from '../../../redux/reducers/about-reducer'
import { AppStateType } from '../../../redux/store'
import { About } from './About'
import { getAboutInfoDatesSelector } from '../../../redux/selectors/about-selector'

type MapStateType = {
    infoDates: Array<InfoDataType>
}
type MapDispatchType = {}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType

const ContainerAbout: React.FC<PropsType> = React.memo((props) => {

    const { infoDates } = props

    return <About infoDates={infoDates} />
})

const mapState = (state: AppStateType): MapStateType => ({
    infoDates: getAboutInfoDatesSelector(state)
})

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapState, {
        //dispatch
    })
)(ContainerAbout)