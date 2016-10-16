import React, {Component} from 'react'

import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native'

import {connect} from 'react-redux'

import {selectTab} from '../actions'

import styles from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

import {red, darkgrey} from '../../../constants/colors'
import wait from '../../../utility/wait'

// import {tabRouteComponentMap} from './initialState'

const Badge = ({
    value,
    style,
    contentContainerStyle,
}) => {
    if (value) return (
        <View style={[styles.badgeView, contentContainerStyle]}>
            <Text style={[styles.badgeText, style]}>{value}</Text>
        </View>
    )

    return null
}

const TabBarIcon = ({
    name = 'ios-settings',
    color = darkgrey,
    size = 30,
}) =>
    <Icon
        name={name}
        color={color}
        size={size}
    />

class TabBarItemComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            onPress,
            titleProps,
            iconProps,
            badge,
            title,
        } = this.props

        const {
            height,
            bottom,
        } = titleProps

        return (
            <TouchableOpacity
                style={styles.tabBarItemTouchableOpacity}
                onPress={onPress}
            >
                <View style={styles.tabBarItemView}>
                    <TabBarIcon
                        {...iconProps}
                    />
                    <Badge value={badge} />
                </View>
                <View style={{
                    height,
                    bottom,
                }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const routeIconMap = {
    ['Training Portal']: {
        name: 'ios-home',
    },

    ['Search']: {
        name: 'ios-search',
    },

    ['Content Creation']: {
        name: 'ios-create',
    },

    ['Chat']: {
        name: 'ios-chatboxes',
    },

    ['Calendar']: {
        name: 'ios-calendar',
    },
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props)

        this.renderTab = this.renderTab.bind(this)
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    renderTab(route, key) {
        const {
            index,
            selectTab,
        } = this.props

        const onPress = () => selectTab(route.key)
        const title = route.title || route.key
        const badge = route.badge

        const props = {
            key,
            badge,
            title,
            onPress,
            titleProps: {
                height: 0,
                bottom: -7,
            },
            iconProps: {
                ...routeIconMap[route.key],
            },
        }

        if (index === key) {
            props.titleProps = {
                height: 11,
                bottom: 0,
            }

            props.iconProps = {
                name: props.iconProps.activeName || props.iconProps.name + '-outline',
                color: red,
            }
        }

        return (
            <TabBarItemComponent
                {...props}
            />
        )
    }

    render() {
        const {routes} = this.props
        return (
            <View style={styles.tabs}>
                {routes.map(this.renderTab)}
            </View>
        )
    }
}

export default connect(
    ({Navigation}) => {
        const {index, routes} = Navigation.tabs

        return {
            index,
            routes,
        }
    }, {
        selectTab,
    }
)(TabBarComponent)
