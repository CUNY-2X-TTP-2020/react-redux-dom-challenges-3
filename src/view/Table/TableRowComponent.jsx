import React from "react";

/**
 * A presentational component which renders a single table row.
 * Each row contains X amount of cells
 * 
 * The props it receives are:
 * - color
 * - array of cells to render
 */
const TableRowComponent = (props) =>
{
    return (
        <tr className="grid-row">
            {props.cells}
        </tr>
    );
}

export default TableRowComponent;