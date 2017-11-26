import Immutable from 'immutable'

const init = Immutable.Map({
    price: null,
})

export default function reducer(state = init, action) {

    switch (action.type) {

        case "SET_PRICE":
            console.log(action)
            return state.set('price', action.price)

        default:
            return state
    }
}
