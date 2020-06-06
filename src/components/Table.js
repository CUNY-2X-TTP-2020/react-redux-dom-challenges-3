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
            color: "gray"
        }
    }

    render()
    {
        return (
            <section>
                <div className="buttons">
                    <button onClick={this.handleAddRow}>Add Row</button>
                    <button onClick={this.handleAddColumn}>Add Column</button>
                    <select onChange={this.handleSelectColor}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                    </select>
                    <button onClick={this.handleSelectColor}>Select Color</button>
                </div>
                
                <table id="grid">
                    <tr className="grid-row">
                        <td className="grid-cell"></td>
                        <td className="grid-cell"></td>
                        <td className="grid-cell"></td>
                        <td className="grid-cell"></td>
                        <td className="grid-cell"></td>
                    </tr>
                </table>
            </section>
        );
    }

    handleAddRow()
    {

    }

    handleAddColumn()
    {

    }

    handleSelectColor = (event) =>
    {
        this.setState({ color: event.target.value });
    }
}