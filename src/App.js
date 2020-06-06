import React, { Component } from 'react';
import './App.css';

/**
 * A stateful class component which handles the rendering of these presentational components:
 * - Table.js
 * - TableRow.js
 * - TableCell.js
 * 
 * The minimum viable product features of this app are:
 * - A user can add a row
 * - A user can add a column
 * - A user can select a color
 * - A user can color in a single cell via click
 * 
 * This component will render a single Table component
 */
export default class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>DOM Challenges 3</h1>
                </header>
            </div>
        );
    }
}