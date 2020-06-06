import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A presentational component which is rendered by TableRow
 * 
 * The TableCell component will:
 * - receive props from TableRow
 * - contain the state of its color
 * - listen for click events
 */
export default class TableCell extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            color: props.color
        }
    }

    handleClick = (event) =>
    {

    }

    render()
    {
        return (
            <td color={this.state.color} onClick={this.handleClick} />
        );
    }
}

TableCell.propTypes =
{
    color: PropTypes.string,
    clickHandler: PropTypes.func
}