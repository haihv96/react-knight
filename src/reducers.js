import {combineReducers} from 'redux'
import appReducer from './containers/App/reducer'
import dashboardReducer from './containers/Dashboard/reducer'

export default (injectedReducers) => {
    return combineReducers({
        global: appReducer,
        dashboard: dashboardReducer,
        ...injectedReducers,
    });
}
