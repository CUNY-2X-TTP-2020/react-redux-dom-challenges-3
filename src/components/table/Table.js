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
    }

    render()
    {
        return (
            <section>
                <div className="buttons">
                    <button id="add-row" onClick={this.handleClickEvents}>Add Row</button>
                    <button id="add-column" onClick={this.handleClickEvents}>Add Column</button>
                    <button id="select-color" onClick={this.handleClickEvents}>Select Color</button>
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

    handleClickEvents = (event) =>
    {
        const eventName = event.target.id;
        console.log(eventName);
    }
}