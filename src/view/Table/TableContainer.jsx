import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * A smart container component which will connect to the Redux store and 
 * map states and dispatches for other components to use
 */
class TableContainer extends Component
{
    render()
    {
        return (
            <section>
                
            </section>
        );
    }
}

// Map state to props
function mapState(state)
{
    return { 
        color: state.color,
        numOfCells: state.numOfCells,
        numOfRows: state.numOfRows
    };
}

// Map dispatch to props
function mapDispatch(dispatch)
{
    return {

    };
}

// Export our store-connected component
export default connect(mapState, mapDispatch)(TableContainer);