import React from 'react'
import {DragSource} from 'react-dnd'
import style from '../style.scss'

const squareSource = {
    beginDrag(props) {
        return {}
    }
}
const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
})

const Square = ({connectDragSource, isDragging}) => (
    connectDragSource(
        <div className={style.square}>
            <div className={style.title}>
                H1
            </div>
        </div>
    )
)

export default DragSource('square_board', squareSource, collect)(Square)
