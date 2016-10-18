import React from 'react'

import styles from './styles'
import HorizontalTab from '../HorizontalTab'

import Profile from './views/Profile'
import ListItemExercises from './views/ListItemExercises'
import ListItemSessions from './views/ListItemSessions'
import ListItemPrograms from './views/ListItemPrograms'

export default ({
    dataSource,
}) => (
    <HorizontalTab
        scrollViewBackgroundColor={'white'}
        dataSource={dataSource}
    />
)
