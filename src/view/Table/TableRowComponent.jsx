import React from "react";
import PropTypes from "prop-types";

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

TableRowComponent.propTypes =
{
    id: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired
}

export default TableRowComponent;