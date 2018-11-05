import React from 'react'
import Cell from './Cell'
import style from './style.scss'

const Board = ({width, height}) => (
    <div className={style.board}>
        {
            Array.from(Array(height).keys()).map((v_height) => {
                const row = Array.from(Array(width).keys()).map((v_width) => (
                    <Cell key={v_width} cord={{x: v_width, y: v_height}} end_row={width === (v_width + 1)} end_col={height === (v_height + 1)}/>
                ))
                return <div key={v_height} className={style.row}>{row}</div>
            })
        }
    </div>
)

export default Board
