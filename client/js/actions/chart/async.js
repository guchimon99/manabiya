import * as sync from './sync'
import * as api from 'api/chart'

export const fetchPrice = (coin) =>
    dispatch => {
        api.getPrice(coin)
        .then(body => {
            if (!body.error) {
                console.log(body)
                dispatch(sync.setPrice(body.data))
            } else {
                console.error(`ERROR:${body.error.message}`)
            }
        })
    }
