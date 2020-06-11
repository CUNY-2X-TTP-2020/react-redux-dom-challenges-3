import React from 'react';
import './App.css';

import TableContainer from "../Table/TableContainer";

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
 * - create a single table component
 */
function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>DOM Challenges 3 (Redux)</h1>
                <TableContainer />
            </header>
        </div>
    );
}

export default App;