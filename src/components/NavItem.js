import React from 'react';
import '../styles/components/NavItem.css'

class NavItem extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <div>
                    {this.props.icon}
                </div>
            </li>
        );
    };
}

export default NavItem;
