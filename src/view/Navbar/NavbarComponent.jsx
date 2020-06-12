import React from "react";

const NavbarComponent = (props) =>
{
    return (
        <section>
            <button onClick={props.addRow}>Add Row</button>
            <button onClick={props.addColumn}>Add Column</button>
            <select onChange={event => props.selectColor(event.target.value)}>
                <option value="gray">Gray (Default)</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
            </select>
        </section>
    );
}

export default NavbarComponent;