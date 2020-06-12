import React from "react";

/**
 * A presentational component which renders a single table row.
 * Each row contains X amount of cells
 * 
 * The props it receives are:
 * - key: unique to make React happy
 * - cells: array of individual cells per row to make up the columns
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