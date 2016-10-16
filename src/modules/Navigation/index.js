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

import {connect} from 'react-redux'

import styles from './styles'

import {
    pop,
    push,
} from './actions'

import SceneComponent from './SceneComponent'
import TabBar from './TabBar'

import Connection from '../Connection'
import {red} from '../../constants/colors'

import Icon from 'react-native-vector-icons/Ionicons'

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
} = NavigationExperimental

const NavigationHeaderButton = ({
    onPress,
    color = 'white',
    size = 30,
    name = 'ios-arrow-back',
    left = 0,
    top = 0,
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.navigationButton, styles.NavigationHeaderButton]}
    >
        <Icon
            size={size}
            color={color}
            name={name}
            style={{
                top,
                left,
            }}
        />
    </TouchableOpacity>
)

const NavigatorView = ({
    tabKey,
    scenes,
    routes,
    index,
    pop,
    push,
}) =>
    <NavigationCardStack
        style={styles.navigatorCardStack}
        navigationState={scenes}
        onNavigateBack={pop}
        renderHeader={sceneProps =>
            <View style={styles.flex}>
                <NavigationHeader
                    {...sceneProps}
                    style={styles.NavigationHeader}
                    onNavigateBack={pop}
                    renderLeftComponent={({scene, onNavigateBack}) => {
                        if (!scene.index) return null
                        return (
                            <NavigationHeaderButton
                                onPress={onNavigateBack}
                                color={'white'}
                                top={2}
                                left={-6}
                            />
                        )
                    }
                    }
                    renderRightComponent={({scene}) => {
                        if (!scene.NavigationHeaderRightComponentProps) return null
                        return (
                            <NavigationHeaderButton
                                color={'white'}
                                name={'ios-settings'}
                                size={24}
                                top={2}
                                left={4}
                                {...NavigationHeaderRightComponentProps}
                            />
                        )
                    }}
                    renderTitleComponent={({scene}) =>
                        <NavigationHeader.Title>
                            <Text style={styles.NavigationHeaderTitle}>
                                {scene.route.title || scene.route.key}
                            </Text>
                        </NavigationHeader.Title>
                    }
                />
                <Connection />
            </View>
        }
        renderScene={sceneProps => {
            const route = sceneProps.scene.route

            if (routes.map(
                ({key}) => key === route.key
            ).includes(true)) {
                route.component = route.key
                route.TabBar = true
            }

            return (
                <View style={styles.flex}>
                    <SceneComponent
                        sceneProps={sceneProps}
                        route={sceneProps.scene.route}
                        component={route.component}
                        routes={routes}
                        index={index}
                        pop={pop}
                        push={push}
                    />
                    {(() => {
                        if (route.TabBar) return (
                            <TabBar />
                        )
                    })()}
                </View>
            )
        }
        }
    />

const Navigator = connect(
    ({Navigation}) => {
        const {tabs} = Navigation
        const {index, routes} = tabs
        const tabKey = routes[index].key
        const scenes = Navigation[tabKey]

        return {
            tabKey,
            scenes,
            routes,
            index,
        }
    }, {
        pop,
        push,
    }
)(NavigatorView)

export default Navigator
