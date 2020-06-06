import React, { Component } from 'react';

import { Table } from '../table';

/**
 * An event handling component which is rendered by App
 * 
 * The ControlPanel component will:
 * - handle button click events that will allow the user to interact with 
 * Table and its elements
 * - execute the appropriate actions with each button click
 */
export default class ControlPanel extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <section>
                <button onClick={this.handleAddRow}>Add Row</button>
                <button onClick={this.handleAddColumn}>Add Column</button>
                <button onClick={this.handleSelectColor}>Select Color</button>
                <Table 
                    addRow={this.handleAddRow}
                    addColumn={this.handleAddColumn}
                    selectColor={this.handleSelectColor}
                />
            </section>
        );
    }

    handleAddRow()
    {

    }

    handleAddColumn()
    {

    }

    handleSelectColor()
    {

    }
}