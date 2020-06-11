import React, { Component } from "react";
import { connect } from "react-redux";

import { selectColor } from "../../state";

class NavbarContainer extends Component
{
    render()
    {
        return (
            <section>
                Navbar
            </section>
        );
    }
}

// Map state to props
function mapState(state)
{
    return { color: state.table.color };
}

// Map dispatch to props
function mapDispatch(dispatch)
{
    return {
        onColorSelect: (color) => dispatch(selectColor(color))
    };
}

// Export our store-connected component
export default connect(mapState, mapDispatch)(NavbarContainer);