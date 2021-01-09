import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import '../styles/components/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="app__container">
                <div className="app__content">

                    <HomeScreen />
                </div>
            </div>
        );
    }
}

export default App;
