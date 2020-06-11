import React, { Component } from "react";
import { connect } from "react-redux";

import NavbarContainer from "../Navbar/NavbarContainer";
import TableContainer from "../Table";

/**
 * A smart container component that will be rendered by App, and will 
 * render NavbarContainer and TableContainer
 */
class AppContainer extends Component
{
    render()
    {
        return (
            <>
                <NavbarContainer />
                <TableContainer />
            </>
        );
    }
}

// Export our store-connected component
export default connect()(AppContainer);