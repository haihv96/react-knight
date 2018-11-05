import React from 'react'
import Square from './components/Square'
import style from './style.scss'

const ToolBox = () => (
    <div className={style.toolbox}>
        <div className={style.draw_select_container}>
            <div className={style.title}>Select diagram</div>
            <Square type="H1"/>
        </div>
    </div>
)

export default ToolBox
