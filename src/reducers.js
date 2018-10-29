import {combineReducers} from 'redux'
import appReducer from './containers/App/reducer'

export default (injectedReducers) => {
    return combineReducers({
        global: appReducer,
        ...injectedReducers,
    });
}
