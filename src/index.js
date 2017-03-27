import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD-bBtJf9L55fYyFp1BapwGHAUftqaCuhY';

// Create new component. This compnent should produce
// some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({ key: API_KEY, temr: 'surfing'}, videos => {
            this.setState({videos});
        });
    }

    render() {
        return <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>; //JXS
    }
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));