import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import {MultiGrid} from 'react-virtualized'
import {AutoSizer} from 'react-virtualized'
import Cell from './Board/Cell'
import ToolBox from './ToolBox'
import style from './style.scss'

const Dashboard = () => (
    <div className={style.body}>
        <div className={style.container}>
            <div className={style.dashboard}>
                <div className={style.toolbox_container}>
                    <ToolBox/>
                </div>
                <div className={style.board_container}>
                    <AutoSizer>
                        {
                            ({width, height}) => (
                                <MultiGrid
                                    cellRenderer={({rowIndex, columnIndex, style}) => (<Cell {...{rowIndex, columnIndex, style}}/>)}
                                    columnWidth={60}
                                    rowHeight={60}
                                    columnCount={64}
                                    rowCount={64}
                                    height={height}
                                    width={width}
                                    enableFixedColumnScroll
                                    enableFixedRowScroll
                                    hideTopRightGridScrollbar
                                    hideBottomLeftGridScrollbar
                                />
                            )
                        }
                    </AutoSizer>
                </div>
                <div className={style.clear_fix}/>
            </div>
        </div>
    </div>
)

export default DragDropContext(HTML5Backend)(Dashboard)
