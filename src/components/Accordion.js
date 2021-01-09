import React from 'react';

class Accordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedAccordion: 0
        }
    }

    renderSections(data) {
        return data.map((item, index) => {
            return (
                <div 
                    className="accordion__section"
                    onClick={() => this.setState({ selectedAccordion: index })}
                    key={index}
                >
                    <h1 style={{ cursor: 'pointer' }} >{item.title}</h1>

                    {index === this.state.selectedAccordion ? <p>{item.description}</p> : null}

                </div>
            )
        })
    }

    render() {
        return (
            <div className="accordion__container">
                <div className="accordion__content">
                    {this.renderSections(this.props.accordionData)}
                    <p>{this.state.selectedAccordion}</p>
                </div>
            </div>
        );
    }
}

export default Accordion;
