import React, { Component } from "react";

/**
 * A presentational component which renders a single table cell
 * 
 * The props it receives are:
 * - color
 */
class TableCellComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            color: "transparent"
        };
    }

    handleClick = () =>
    {
        this.setState({ color: this.props.color });
    }

    render()
    {
        return (
            <td 
                className="grid-cell" 
                bgcolor={this.state.color} 
                onClick={this.handleClick} 
            />
        );
    }
};

export default TableCellComponent;