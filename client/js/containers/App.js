import { connect } from 'react-redux'

import Component from 'components/App'

export default connect(
    function mapStateToProps(state) {
        return {
            chart: state.chart
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
        }
    }
)(Component)
