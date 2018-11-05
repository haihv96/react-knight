import React, {PureComponent} from 'react'
import classnames from 'classnames'
import {DropTarget} from 'react-dnd'
import {connect} from 'react-redux'
import _ from 'lodash'
import localStyle from './style.scss'
import {dropSourceTypes} from '../../constants'
import {updateComponentsData} from '../../actions'
import Square from '../../Board/components/Square'

const listComponent = {
    Square,
}

const cellTarget = {
    drop(props, monitor) {
        props.dispatchUpdateComponentsData({...monitor.getItem(), cord: {x: props.rowIndex, y: props.columnIndex}})
    }
};

const collect = (connect, monitor) => {
    return {
        connectDropSource: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

class Cell extends PureComponent {
    render() {
        const {rowIndex, columnIndex, style, connectDropSource, isOver, components} = this.props
        const ComponentAppend = getComponentAppend(components, {x: rowIndex, y: columnIndex})
        return (
            connectDropSource(
                <div classNamelocalStyle.cell_style)} style={style}>
                    {ComponentAppend && <ComponentAppend/>}
                    {isOver && <div className={localStyle.over_style}/>}
                </div>
            )
        )
    }
}

const getComponentAppend = (components, cord) => {
    _.forEach(components, (component, k) => {
        if (_.isEqual(component.cord, cord)) {
            const RenderComponent = listComponent[component.name];
        }
    })
    return null;
}

const mapStateToProps = state => ({
    components: state.dashboard.components
})

const mapDispatchToProps = dispatch => ({
    dispatchUpdateComponentsData: data => {
        dispatch(updateComponentsData(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    DropTarget(dropSourceTypes, cellTarget, collect)(Cell)
)
