import React, { Component } from 'react';

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
    render()
    {
        return (
            <section>
                <button>Add Row</button>
                <button>Add Column</button>
                <button>Select Color</button>
            </section>
        );
    }
}