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