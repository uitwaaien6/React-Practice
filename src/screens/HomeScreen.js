import React from 'react';
import SearchBar from '../components/SearchBar';
import VideoSection from '../components/VideoSection';
import Accordion from '../components/Accordion';
import youtubeAPI from '../api/youtubeAPI';
import Widgets from '../components/Widgets';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import { MdCenterFocusStrong } from "react-icons/md";

import axios from 'axios';
import '../styles/screens/HomeScreen.css';

// not much css but it can be added easily, focused on the functionality of the GUI's

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            accordionData: [
                {
                    title: 'React',
                    description: 'React is awesome'
                },
                {
                    title: 'React',
                    description: 'React is awesome'
                },
                {
                    title: 'React',
                    description: 'React is awesome'
                }
            ],
            menuItems: [
                {
                    text: 'Hindi',
                    value: 'hi'
                },
                {
                    text: 'Turkish',
                    value: 'tr'
                },
                {
                    text: 'English',
                    value: 'en'
                }
            ],
            selectedItem: 0,
            textToTranslate: '',
            translatedText: '',

        }

        this.timerId = null;

        this.onSearch = this.onSearch.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.selectMenuItem = this.selectMenuItem.bind(this);
        this.handleTranslateInput = this.handleTranslateInput.bind(this);
    }

    async onSearch(params) {

        const response = await youtubeAPI.get('/search', {
            params
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
    }

    selectMenuItem(index) {
        this.setState({ selectedItem: index, menuItems: this.state.menuItems, vide: this.state.video, selectedVideo: this.state.selectedVideo });
    }

    componentDidMount() {
        this.onSearch({ q: 'youtube rewind' });
    }

    async handleTranslateInput(e) {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        this.setState({ ...this.state, textToTranslate: e.target.value });
        console.log(' ~ Sending a Translaton Request...')

        this.timerId = setTimeout(async () => {

            if (this.state.textToTranslate !== '') {

                const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: this.state.textToTranslate,
                        target: this.state.menuItems[this.state.selectedItem].value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
    
                this.setState({ ...this.state, translatedText: response.data.data.translations[0].translatedText });
            }

        }, 1000);
    }

    render() {

        return (
            <div className="home-screen__container">
                <div style={{ height: '120rem' }} className="home-screen__content">
                    
                    <SearchBar
                        onSearch={this.onSearch}
                    />
                    
                    <VideoSection
                        selectedVideo={this.state.selectedVideo}
                        videos={this.state.videos}
                        onVideoSelect={this.onVideoSelect}
                    />

                    <Accordion accordionData={this.state.accordionData} />

                    <Widgets />

                    <Navbar>
                        <NavItem icon={<MdCenterFocusStrong />} />
                        <NavItem icon={<MdCenterFocusStrong />} />
                        <NavItem icon={<MdCenterFocusStrong />} />
                    </Navbar>

                    <input
                        onChange={this.handleTranslateInput}
                        value={this.state.textToTranslate}
                        placeholder="text goes here..."
                    />

                    <Dropdown

                        selectMenuItem={this.selectMenuItem}
                        selectedItem={this.state.selectedItem}
                        menuItems={this.state.menuItems}
                    />

                    <p>{this.state.translatedText}</p>

                </div>
            </div>
        );
    };
}



export default HomeScreen;
