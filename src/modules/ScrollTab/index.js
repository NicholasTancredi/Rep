import {connect} from 'react-redux'

import name from './name'
import actions from './actions'
import LocalComponent from './component'

export default connect(
    state => ({
        state: state[name]
    }), actions
)(LocalComponent)
