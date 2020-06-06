import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A presentational component which is rendered by ControlPanel
 * 
 * The Table component will:
 * - be a parent of TableRow
 * - receive bound event handling functions from ControlPanel to handle the 
 * creation of rows and columns
 */
export default class Table extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            rows: props.rows,
            addRow: props.addRow,
            addColumn: props.addColumn,
            selectColor: props.selectColor
        }
    }

    render()
    {
        return (
            <section>
                <button onClick={this.state.addRow}>Add Row</button>
                <button onClick={this.state.addColumn}>Add Column</button>
                <button onClick={this.state.selectColor}>Select Color</button>
                <table></table>
            </section>
        );
    }
}

Table.propTypes =
{
    rows: PropTypes.array.isRequired,
    addRow: PropTypes.func.isRequired,
    addColumn: PropTypes.func.isRequired,
    selectColor: PropTypes.func.isRequired
}