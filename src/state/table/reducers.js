import React from "react";

import types from "./action_types";

import { TableCellComponent, TableRowComponent } from "../../view/Table";

const initialState = 
{
    color: "gray",
    numOfCells: 1,
    numOfRows: 0,
    rows: []
}

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.CREATE_TABLE: 
            let rows = [];

            for(let i = 0; i < state.numOfRows; i++)
            {
                let columns = [];

                for(let j = 0; j < state.numOfCells; j++)
                {
                    columns.push(<TableCellComponent 
                        key={i+j.toString()} 
                        color={state.color} 
                    />);
                }
                rows.push(<TableRowComponent key={i.toString()} cells={columns} />);
            }
            return { ...state, rows };

        case types.ADD_ROW:
            return { ...state, numOfRows: state.numOfRows + 1 };

        case types.ADD_COLUMN:
            return { ...state, numOfCells: state.numOfCells + 1 };

        case types.SELECT_COLOR:
            return { ...state, color: action.color }

        default: 
            return state;
    }
};

export default reducer;