import React, { Component } from 'react';
import { TableRow, TableCell } from '.';

/**
 * A presentational component which is rendered by App
 * 
 * The Table component will:
 * - be a parent of TableRow
 * - render the add row/column buttons as well as the dropdown color selection menu
 * - handle button click events
 * - handle the creation of rows and columns
 * - handle color selection
 */
export default class Table extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            color: "gray",
            numOfCells: 1,
            numOfRows: 0
        }
    }

    /**
     * Renders the buttons and the table
     */
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
                    <tbody>
                        {this.produceTable(this.state.numOfRows, this.state.numOfCells)}
                    </tbody>
                </table>
            </section>
        );
    }

    /**
     * For each row, create TableCell components equal to the amount of numOfCells
     * For the entire table, create TableRow components equal to the amount of numOfRows
     * 
     * Each cell gets a unique key and current color selected passed in as props
     * Each row gets a unique key, an array of columns, and the current selected color to be 
     * passed down the hierarchy from Table to TableRow to TableCell
     * 
     * @param {number} numOfRows Current number of rows the table has
     * @param {number} numOfCells Current number of cells (columns) per row
     * 
     * @returns {Array} The array of rows to be rendered in the table
     */
    produceTable(numOfRows, numOfCells)
    {
        let rows = [];

        for(let i = 0; i < numOfRows; i++)
        {
            let columns = [];

            for(let j = 0; j < numOfCells; j++)
            {
                columns.push(<TableCell key={i+j.toString()} color={this.state.color} />);
            }
            rows.push(<TableRow key={i.toString()} cells={columns} color={this.state.color} />);
        }

        return rows;
    }

    /**
     * Event handler for Add Row button
     * 
     * Will increment the number of rows by 1
     */
    handleAddRow = () =>
    {
        this.setState({ numOfRows: this.state.numOfRows + 1 });
    }

    /**
     * Event handler for Add Column button
     * 
     * Will increment the number of cells by 1
     */
    handleAddColumn = () =>
    {
        this.setState({ numOfCells: this.state.numOfCells + 1 });
    }

    /**
     * Event handler color selection button
     * 
     * Will update the state of color to the selected option
     */
    handleSelectColor = (event) =>
    {
        this.setState({ color: event.target.value });
    }
}