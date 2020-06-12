import React, { Component } from "react";
import { connect } from "react-redux";

import { NavbarComponent } from "../Navbar";
import { TableComponent } from "../Table";

import { createTable, addRow, addColumn, selectColor } from "../../state";

/**
 * A smart container component that will be rendered by App, and will 
 * render NavbarContainer and TableContainer
 */
class AppContainer extends Component
{
    render()
    {
        return (
            <>
                <NavbarComponent
                    addRow={this.props.addRow}
                    addColumn={this.props.addColumn}
                    selectColor={this.props.selectColor}
                />
                <TableComponent {...this.props} />
            </>
        );
    }
}

// Map state to props
function mapState(state)
{
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
        createTable: (numOfRows, numOfCells) => dispatch(createTable(numOfRows, numOfCells)),
        addRow: () => dispatch(addRow()),
        addColumn: () => dispatch(addColumn()),
        selectColor: (color) => dispatch(selectColor(color))
    };
}

// Export our store-connected component
export default connect(mapState, mapDispatch)(AppContainer);