import {connect} from 'react-redux'
import actions from './actions'
import AccountsComponent from './component'

export default connect(
	({Accounts, Connection}) => ({...Accounts, Connection}), actions
)(AccountsComponent)
