import React, { Component } from 'react';
import './App.css';
import { Table } from './components';

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
 * The App component will:
 * - maintain the state of the grid as well as the state of the selected color
 * - have methods (bound event handler functions) on the class which will be passed down to children components
 * via props (the children components, presentational components, will have event listeners that will fire off
 * the bound event handler functions)
 * - render the dropdown menu as well as the Table component (presentational component)
 */
export default class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>DOM Challenges 3</h1>
                    <Table />
                </header>
            </div>
        );
    }
}