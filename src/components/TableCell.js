import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A presentational component which is rendered by TableRow
 * 
 * The TableCell component will:
 * - receive props from TableRow
 * - contain the state of its color
 * - handle click events of the cell
 */
export default class TableCell extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            key: props.key,
            color: "transparent"
        }
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
            <td className="grid-cell" bgcolor={this.state.color} onClick={this.handleClick} />
        );
    }
}

TableCell.propTypes =
{
    key: PropTypes.string.isRequired,
    color: PropTypes.string
}