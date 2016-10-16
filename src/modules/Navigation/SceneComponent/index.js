import React from 'react'

import {
    LayoutAnimation,
    View,
    Text,
    ScrollView,
    Platform,
    NavigationExperimental,
    TouchableOpacity,
} from 'react-native'

import TabBar from '../TabBar'

const {
    Header: NavigationHeader,
} = NavigationExperimental

import {connect} from 'react-redux'

import styles from '../styles'

import {red} from '../../../constants/colors'

import Icon from 'react-native-vector-icons/Ionicons'

import MeteorList from '../../MeteorList'
import Template from '../../Template'

import {tabRouteComponentMap} from '../initialState'

const routeComponentMap = {
    ...tabRouteComponentMap,
    'test2': props => <Template />,
    'test': props => <MeteorList
        collection="messages"
        selector={(() => {

            // if (this.state.connected) return {_id: this.state.userId}
        })()}
        renderRow={
            ({_id}) => {
                return <Text>{_id}</Text>
            }
        }
        {...props}
    />
}

export default props => {
    const {
        push,
        pop,
        route,
        routes,
        index,
        component,
    } = props

    const routeProps = route.props || {}
    const RouteComponent = routeComponentMap[component]

    return (
        <View style={styles.flex}>
            {(() => {
                if (RouteComponent) return <RouteComponent {...props} {...routeProps} />
            })()}
        </View>
    )
}
