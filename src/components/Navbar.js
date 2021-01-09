import React from 'react';

import '../styles/components/Navbar.css'

class Navbar extends React.Component {

    async translateAPI() {


    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="nav-bar">
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    };
}

export default Navbar;
