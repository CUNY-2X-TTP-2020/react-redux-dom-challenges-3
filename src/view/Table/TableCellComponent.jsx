import React from "react";

/**
 * A presentational component which renders a single table cell
 * 
 * The props it receives are:
 * - color
 * - event handler for clicking
 */
const TableCellComponent = (props) =>
{
    return (
        <td className="grid-cell" bgcolor={props.color} onClick={props.onClick} />
    );
};

export default TableCellComponent;