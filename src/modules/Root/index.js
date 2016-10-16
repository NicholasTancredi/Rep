import React from 'react'

import ComponentView from './view'

import Navigation from '../Navigation'
import StatusBar from '../StatusBar'

import Accounts from '../Accounts'

export default () => (
    <ComponentView>
        <StatusBar />
        <Navigation />
        <Accounts />
    </ComponentView>
)
