import React from 'react'
import {DragSource} from 'react-dnd'
import {connect} from 'react-redux'
import style from '../style.scss'
import {dragSourceType} from '../../constants'

const squareSource = {
    beginDrag(props) {
        return {
            id: props.nextId,
            name: Square.name,
        }
    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
})

const Square = ({type, connectDragSource, isDragging}) => (
    connectDragSource(
        <div className={style.square} style={{opacity: isDragging ? 0.6 : 1}}>
            <div className={style.type}>
                {type}
            </div>
        </div>
    )
)

const mapStateToProps = state => {
    return {
        nextId: state.dashboard.components.reduce((prev, curr) => (curr.id > prev.id ? curr : prev)).id + 1
    }
}

export default connect(mapStateToProps)(
    DragSource(dragSourceType.SQUARE_TOOLBOX, squareSource, collect)(Square)
)
