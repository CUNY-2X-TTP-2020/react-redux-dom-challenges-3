import React, { Component } from "react";
import { connect } from "react-redux";

// Smart container
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
        color: "gray",
        numOfCells: 1,
        numOfRows: 0
    };
}

// Map dispatch to props
function mapDispatch(dispatch)
{

}

// Export our store-connected component
export default TableContainer;