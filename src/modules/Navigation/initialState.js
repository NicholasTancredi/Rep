import TrainingPortal from '../TrainingPortal'
// import Search from '../Search'
// import ContentCreation from '../ContentCreation'
// import Chat from '../Chat'
// import Calendar from '../Calendar'

const routeMap = {
    ['Training Portal']: {
        component: TrainingPortal,
        tabBar: {
            name: 'ios-home',
        },
    },

    ['Search']: {
        // component: Search,
        tabBar: {
            name: 'ios-search',
        },
    },

    ['Content Creation']: {
        // component: ContentCreation,
        tabBar: {
            name: 'ios-create',
        },
    },

    ['Chat']: {
        // component: Chat,
        tabBar: {
            name: 'ios-chatboxes',
        },
    },

    ['Calendar']: {
        // component: Calendar,
        tabBar: {
            name: 'ios-calendar',
        },
    },
}

const routeKeys = Object.keys(routeMap)

export const tabRouteIconMap = routeKeys.reduce((reduction, key) => ({
    ...reduction, [key]: routeMap[key].tabBar
}), {})

export const tabRouteComponentMap = routeKeys.reduce((reduction, key) => ({
    ...reduction, [key]: routeMap[key].component
}), {})

const index = 0

const createTabbedRoutes = keys =>
    keys.reduce((reduction, key) => ({
        ...reduction, [key]: {
            index,
            routes: [{key: key}]
        }
    }), {})

const tabRoutes = createTabbedRoutes(routeKeys)

const routes = Object.keys(tabRoutes).map( key => ({key: key}) )

const initialState = {
    tabs: {
        index,
        routes,
    },
    ...tabRoutes,
}

export default initialState
