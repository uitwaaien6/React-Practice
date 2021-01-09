import React from 'react';

class Dropdown extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    renderMenu(items) {

        return items.map((item, index) => {

            if (index === this.props.selectedItem || this.state.open) {

                return (
                
                    <div 
                        className="dropdown__item"
                    >
                        <p 
                            onClick={() => {
                                this.props.selectMenuItem(index);
                                this.setState({ open: false });
                            }} 
                        >
                            {item.text}
                        </p>
                            
                    </div>
                );
            } else {
                return null;
            }

        });
    }

    render() {
        return (
            <div className="dropdown__container">
                <div className="dropdown__content" style={{ display: 'flex' }}>

                    <div className="dropdown__items" style={{ width: '4rem' }}>
                        {this.renderMenu(this.props.menuItems)}
                    </div>

                    <span
                        onClick={() => {
                            this.setState({ open: true });
                        }}
                        style={{ color: 'black', paddingLeft: '2rem' }}
                    >
                        Select
                    </span>

                </div>
            </div>
        );
    };
}

export default Dropdown;
