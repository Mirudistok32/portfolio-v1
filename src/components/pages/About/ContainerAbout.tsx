import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../../redux/store'
import { About } from './About'


type MapStateType = {}
type MapDispatchType = {}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType

const ContainerAbout: React.FC<PropsType> = React.memo((props) => {


    return <About />
})

const mapState = (state: AppStateType): MapStateType => ({

})

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapState, {
        //dispatch
    })
)(ContainerAbout)