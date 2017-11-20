import * as sync from './sync'

export const setSingle = (single) =>
    dispatch => {
        dispatch(sync.setSingleStart(single))
    }
