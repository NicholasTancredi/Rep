import React, {Component} from 'react'

import renderListView from './views/renderListView'
import renderActivityIndicatorView from './views/renderActivityIndicatorView'

export default class LocalComponent extends Component {
    render() {
        return (
            (!this.props.connectedMeteor) ? (
                renderActivityIndicatorView(this.props)
            ) : (
                renderListView(this.props)
            )
        )
    }
}
