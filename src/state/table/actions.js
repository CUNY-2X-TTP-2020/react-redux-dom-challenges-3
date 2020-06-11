import types from "./action_types";

// ACTION CREATORS
export function createTable(numOfRows = 10, numOfCells = 10)
{
    return { 
        type: types.CREATE_TABLE, 
        numOfRows,
        numOfCells 
    };
}

export function addRow()
{
    return { type: types.ADD_ROW };
}

export function addColumn()
{
    return { type: types.ADD_COLUMN };
}

export function selectColor(color)
{
    return {
        type: types.SELECT_COLOR,
        color
    };
}