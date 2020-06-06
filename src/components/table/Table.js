import React, { Component } from 'react';

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
    render()
    {
        return (
            <table></table>
        );
    }
}