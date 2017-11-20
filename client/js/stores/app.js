import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import chart from 'reducers/chart'

const reducer = combineReducers({
    chart
})

const app = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default app
