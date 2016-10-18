import Meteor from 'react-native-meteor'
import MeteorListComponentView from './views/MeteorListComponentView'

export default (props) => (
    Meteor.createContainer(() => {
        const handle = Meteor.subscribe(props.collection)

        return {
            ready: handle.ready(),
            ...props
        }
    }, MeteorListComponentView)
)
