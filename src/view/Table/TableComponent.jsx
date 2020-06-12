import React from "react";
import PropTypes from "prop-types";

/**
 * A presentational component which renders the entirety of the table,
 * consisting of rows and columns
 * 
 * The props it receives are:
 * - rows: array of rows, each containing their own array of individual cells,
 * which forms the entire table
 */
const TableComponent = (props) =>
{
    console.log(props);
    return (
        <section>
            <table id="grid">
                <tbody>
                    {props.rows}
                </tbody>
            </table>
        </section>
    );
}

TableComponent.propTypes =
{
    rows: PropTypes.array.isRequired
}

export default TableComponent;