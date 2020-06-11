import React from "react";

/**
 * A presentational component which renders the entire table of rows 
 * containing cells
 * 
 * The props it receives are:
 * - number of rows
 * - number of cells
 * - an action to produce the table
 */
const TableComponent = (props) =>
{
    return (
        <table>
            <tbody>
                {() => props.produceTable(props.numOfRows, props.numOfCells)}
            </tbody>
        </table>
    );
}

export default TableComponent;