import { portfolioReducer } from './reducers/portfolio-reducer';
import { combineReducers, createStore } from "redux";
import { navigationReducer } from './reducers/navigation-reducer'
import { aboutReducer } from './reducers/about-reducer'

const rootReducers = combineReducers({
    navigationReducer,
    aboutReducer,
    portfolioReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>



const store = createStore(rootReducers)

export default store