import {connect} from 'react-redux'

import name from './name'
import ComponentView from './view'

export default connect(
    state => ({...state[name]})
)(ComponentView)
