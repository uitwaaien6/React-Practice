import React from 'react';
import '../styles/components/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onSearch = this.onSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    onSearch() {
        this.props.onSearch({ q: this.state.term });

    }

    handleInput(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar__container">
                <div className="search-bar__content">
                    <div>

                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.handleInput}
                        />

                        <p
                            onClick={this.onSearch}
                        >
                            Search
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
