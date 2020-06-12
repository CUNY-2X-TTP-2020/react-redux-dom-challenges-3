import React from "react";

const TableComponent = (props) =>
{
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

export default TableComponent;