import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * A presentational component which renders a single table cell
 * 
 * The props it receives are:
 * - key: unique to make React happy
 * - color: to be filled into the cell upon user click event
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

    /**
     * Event handler that will update the cell's color upon click
     */
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

TableCellComponent.propTypes =
{
    id: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default TableCellComponent;