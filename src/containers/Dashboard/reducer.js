import {UPDATE_COMPONENTS_DATA} from './constants'

const initState = {
    components: [
        {
            id: 0,
            name: null,
            cord: {
                x: null,
                y: null
            },
        }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case UPDATE_COMPONENTS_DATA:
            if (state.components.some((component) => (component.id === action.data.id))) {
                let components = state.components.map((k, component) => (component.id === action.data.id ? {...component, ...action.data} : component))
                return {...state, components}
            } else {
                return {...state, components: [...state.components, action.data]}
            }
        default:
            return state
    }
}
