import React, { Component } from "react";
import { connect } from "react-redux";

import { createTable, addRow, addColumn, selectColor } from "../../state";

/**
 * A smart container component which will connect to the Redux store and 
 * map states and dispatches for other components to use
 */
class TableContainer extends Component
{
    render()
    {
        console.log(this.props);
        return (
            <section>

            </section>
        );
    }
}

// Map state to props
function mapState(state)
{
    console.log(state);
    return { 
        color: state.table.color,
        numOfCells: state.table.numOfCells,
        numOfRows: state.table.numOfRows,
        rows: state.table.rows
    };
}

// Map dispatch to props
function mapDispatch(dispatch)
{
    return {
        onTableCreate: (numOfRows, numOfCells) => dispatch(createTable(numOfRows, numOfCells)),
        onRowAdd: () => dispatch(addRow()),
        onColumnAdd: () => dispatch(addColumn()),
        onColorSelect: (color) => dispatch(selectColor(color))
    };
}

// Export our store-connected component
export default connect(mapState, mapDispatch)(TableContainer);