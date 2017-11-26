import { connect } from 'react-redux'

import Component from 'components/App'
import * as chartActions from 'actions/chart'

export default connect(
    function mapStateToProps(state) {
        return {
            chart: state.chart
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            fetchPrice: (coin) => dispatch(chartActions.fetchPrice(coin))
        }
    }
)(Component)
