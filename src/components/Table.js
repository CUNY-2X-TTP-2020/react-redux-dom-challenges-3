import React, { Component } from 'react';
import { TableCell } from '.';

/**
 * A presentational component which is rendered by App
 * 
 * The Table component will:
 * - be a parent of TableRow
 * - handles button click events
 * - handles the creation of rows and columns
 * - handles color selection
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
                        <option value="gray">Gray (Default)</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                    </select>
                </div>
                
                <table id="grid">
                    <tr className="grid-row">
                        <TableCell color={this.state.color}/>
                        <TableCell color={this.state.color}/>
                        <TableCell color={this.state.color}/>
                        <TableCell color={this.state.color}/>
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