import {connect} from 'react-redux'
import LocalComponent from './LocalComponent'

export default connect(
    ({Connection}) => ({
        ...Connection,
    })
)(LocalComponent)
