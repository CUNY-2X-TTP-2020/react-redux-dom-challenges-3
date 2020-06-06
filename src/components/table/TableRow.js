import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A presentational component which is rendered by Table
 * 
 * The TableRow component will:
 * - receive props from Table
 * - be a parent of TableCell
 * - handle the creation of TableCell components
 */
export default class TableRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            cells: props.cells
        }
    }
}

TableRow.propTypes =
{
    cells: PropTypes.array.isRequired
}