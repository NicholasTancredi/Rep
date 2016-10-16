import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    ListView,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'

import wait from '../../utility/wait'

import {red, darkgrey} from '../../constants/colors'
import styles from './styles'
import MeteorList from '../MeteorList'

// import ComponentView from './view'
const TabUnderline = ({

}) => {

}

export default class HorizontalTab extends Component {
    constructor(props) {
        super(props)

        const defaultProps = {
            dataSource: [],
            initialTabIndex: 0,
            tabUnderlineWidth: 2,
            tabUnderlineColor: red,
        }

        const DataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        const windowWidth = Dimensions.get('window').width

        this._props = {
            ...defaultProps,
            ...this.props,
        }

        this.initialContentOffset = windowWidth * this._props.initialTabIndex

        this.state = {
            dataSource: DataSource.cloneWithRows(this._props.dataSource),
            windowWidth,
            contentOffset: this.initialContentOffset,
            tabWidths: [],
            tabCounts: [],
            activeTabIndex: this._props.initialTabIndex,
            tabUnderlineWidth: windowWidth / this._props.dataSource.length,
        }

        this.renderRow = this.renderRow.bind(this)
        this.renderTab = this.renderTab.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
        this.handleTabPress = this.handleTabPress.bind(this)
        this.getActiveTabIndex = this.getActiveTabIndex.bind(this)
        this.handleTabLayout = this.handleTabLayout.bind(this)
        this.renderUnderline = this.renderUnderline.bind(this)
    }

    getActiveTabIndex() {
        const {
            windowWidth,
            contentOffset,
            tabWidths,
        } = this.state

        const activeTabIndex = Math.round(
            (windowWidth + contentOffset) / windowWidth
        ) - 1

        if (activeTabIndex !== this.state.activeTabIndex) {
            if (tabWidths[activeTabIndex] !== undefined) {
                const remainingWindowWidth = windowWidth - tabWidths.reduce((r, num) => r + num, 0)
                const tabUnderlineWidth = tabWidths[activeTabIndex] + (remainingWindowWidth / this._props.dataSource.length)

                wait(() => {
                    this.setState({
                        activeTabIndex,
                        tabUnderlineWidth,
                    })

                    if (this.props.onChangeTab) this.props.onChangeTab(activeTabIndex)
                })
            }
        }
    }

    renderRow(props, sectionId, rowId) {
        return (
            <MeteorList
                key={rowId}
                {...props}
                listViewRef={ref => {
                    if (ref) {
                        const {_cachedRowCount} = ref.props.dataSource
                        const {tabCounts} = this.state
                        if (tabCounts[rowId] !== _cachedRowCount) {
                            tabCounts[rowId] = _cachedRowCount
                            wait(() => {
                                this.setState({
                                    tabCounts,
                                })
                            })
                        }
                    }
                }}
                renderRow={
                    ({_id}) => {
                        return <Text>{_id}</Text>
                    }
                }
            />
        )
    }

    handleTabLayout({layout}, i) {
        const tabWidths = [...this.state.tabWidths]
        tabWidths[i] = layout.width

        this.setState({
            tabWidths,
        })
    }

    handleTabPress(i) {
        const x = this.state.windowWidth * i
        this.ScrollView.scrollTo(
            {x, y: 0, animated: true}
        )
    }

    renderTab({title, count, i}) {
        const tabTextStyleResult = [this._props.tabTextStyles]

        const tabCountStyleResult = [styles.tabCountStyles]
        tabCountStyleResult.push(this._props.tabTextStyles)
        tabCountStyleResult.push(this._props.tabCountStyles)

        if (this.state.activeTabIndex === i) {
            if (this._props.tabActiveTextStyles) {
                tabTextStyleResult.push(this._props.tabActiveTextStyles)
            }
        }

        count = count || this.state.tabCounts[i]
        if (this.props.noTabCounts) count = ''

        return (
            <TouchableWithoutFeedback
                key={i}
                onPress={() => this.handleTabPress(i)}
                onLayout={({nativeEvent}) =>
                    this.handleTabLayout(nativeEvent, i)
                }
            >
                <View style={[styles.tabStyles, this._props.tabStyles]}>
                    {(() => {
                        if (count) return (
                            <Text style={tabCountStyleResult}>{count}</Text>
                        )
                    })()}
                    <Text style={tabTextStyleResult}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderTabs() {
        return this._props.dataSource.map(
            ({title, count}, i) => this.renderTab({
                count,
                title,
                i,
            })
        )
    }

    renderUnderline() {
        if (this.props.renderUnderline) return this.props.renderUnderline({
            width: this.state.tabUnderlineWidth,
            left: this.state.contentOffset / this._props.dataSource.length,
        })
        return (
            <View style={[{
                height: this._props.tabUnderlineWidth,
                backgroundColor: this._props.tabUnderlineColor,
            }, this._props.tabUnderlineStyles, {
                width: this.state.tabUnderlineWidth,
                left: this.state.contentOffset / this._props.dataSource.length,
            }]} />
        )
    }

    render() {
        const {
            windowWidth,
        } = this.state

        const contentContainerWidth = windowWidth * this._props.dataSource.length

        this.getActiveTabIndex()

        return (
            <View
                style={[styles.flex, this.props.contentContainerStyle]}
                >
                <View>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
                        contentContainerStyle={styles.tabScrollViewcontentContainer}
                    >
                        {this.renderTabs()}
                    </ScrollView>
                    {this.renderUnderline()}
                </View>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
                    enableEmptySections={true}
                    ref={ref => {this.ScrollView = ref}}
                    horizontal={true}
                    pagingEnabled={true}
                    contentOffset={{x:
                        this.initialContentOffset,
                    }}
                    onScroll={({nativeEvent}) => {
                        this.setState({
                            contentOffset: nativeEvent.contentOffset.x,
                        })
                    }}
                    contentContainerStyle={[styles.flex, {
                        width: contentContainerWidth,
                    }]}
                >
                    {
                        this._props.dataSource.map((props, i) =>
                            this.props.renderRow
                                ? this.props.renderRow(props, 1, i)
                                : this.renderRow(props, 1, i)
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}
