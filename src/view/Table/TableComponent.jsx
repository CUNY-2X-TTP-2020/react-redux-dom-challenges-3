import React from "react";

const TableComponent = (props) =>
{
    return (
        <section>
            <table>
                <tbody>
                    {props.rows}
                </tbody>
            </table>
        </section>
    );
}

export default TableComponent;