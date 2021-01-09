import React from 'react';
import axios from 'axios';

class Widgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            term: 'Program',
            timer: null
        }

        this.timerId = null;

        this.fetchWiki = this.fetchWiki.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    async fetchWiki(term) {
        const url = `https://en.wikipedia.org/w/api.php`;

        const { data } = await axios.get(url, {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        });

        this.setState({ results: data });
    }

    handleInput(e) {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        this.setState({ term: e.target.value, results: this.state.results });
                                                 
        this.timerId = setTimeout(() => {
            
            if (this.state.term) {

                console.log('Searching');
                this.fetchWiki(e.target.value);
            }

        }, 500);
    }

    componentDidMount() {
        this.fetchWiki(this.state.term)
    }

    render() {
        return (
            <div className="widgets__container">
                <div className="widgets__content">

                    <input
                        onChange={this.handleInput}
                        value={this.state.term}
                    />

                    {this.state.results?.query?.search?.map((item, index) => {
                        return (
                            <div key={item.pageid}>
                                <h1 >{item.title}</h1>
                                <a rel="noreferrer" target="_blank" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
                            </div>

                        );
                    })}
                </div>
            </div>
        );
    };
}

export default Widgets;
