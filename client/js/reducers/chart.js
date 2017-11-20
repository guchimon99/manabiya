import Immutable from 'immutable'

const init = Immutable.Map({
    single: null,
})

export default function reducer(state = init, action) {

    switch (action.type) {

        case "SET_SINGLE":
            return state.set('single', filterSingle(action.single))

        default:
            return state
    }
}
