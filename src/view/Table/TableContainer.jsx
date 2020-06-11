import React, { Component } from "react";
import { connect } from "react-redux";

import { createTable } from "../../state";

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
                Table
            </section>
        );
    }
}

// Map state to props
function mapState(state)
{
    return { 
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
    };
}

// Export our store-connected component
export default connect(mapState, mapDispatch)(TableContainer);