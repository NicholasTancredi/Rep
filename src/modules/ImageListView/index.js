import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    ListView,
    Dimensions,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'

import ImageProgress from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import {Provider} from 'react-redux'

import wait from './utility/wait'

const sources = [
    'https://s3-us-west-2.amazonaws.com/rep-app-image-video/static/avatar.png',
    'https://s3-us-west-2.amazonaws.com/rep-app-image-video/static/shea.png'
]

export default class ImageListView extends Component {
    constructor(props) {
        super(props)

        const DataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
            dataSource: DataSource.cloneWithRows(sources),
            lastLoadedRowId: 0,
            sizes: [],
        }

        this.renderRow = this.renderRow.bind(this)
    }

    componentDidMount() {
    }

    renderRow(uri, sectionId, rowId) {
        const ImageProgressStyles = {}

        if (this.props.autoSize) {
            Image.getSize(uri, (width, height) => {
                const sizes = [...this.state.sizes]
                sizes[rowId] = {width, height}
                console.log(sizes)
                this.setState({
                    sizes,
                })
            })

            if (this.state.sizes[rowId]) {
                const {
                    width,
                    height
                } = this.state.sizes[rowId]
                ImageProgressStyles.width = width
                ImageProgressStyles.height = height
            }
        }

        return (
            <ImageProgress
                source={{uri}}
                indicator={ProgressBar}
                resizeMode="cover"

                onLoad={(event) => {
                }}

                onError={(event) => {
                }}

                indicatorProps={{
                    size: 80,
                    borderWidth: 0,
                    color: 'rgba(150, 150, 150, 1)',
                    unfilledColor: 'rgba(200, 200, 200, .2)'
                }}

                style={[{
                    flex: 1,
                    backgroundColor: '#f1f1f1',
                    width: Dimensions.get('window').width,
                }, ImageProgressStyles]}
            />
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderScrollComponent={props =>
                    <ScrollView
                        {...props}
                        horizontal={true}
                        pagingEnabled={true}
                        contentOffset={{x: Dimensions.get('window').width}}
                        onScroll={(event) => {
                            console.log('onScroll event: ', event.nativeEvent)
                        }}
                        contentContainerStyle={{
                            backgroundColor: 'blue',
                            flex: 1,
                            width: Dimensions.get('window').width * 2,
                        }}
                    />
                }
            />
        )
    }
}
