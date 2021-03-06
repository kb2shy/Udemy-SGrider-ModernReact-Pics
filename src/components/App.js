import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (input) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: input }            
        });

        this.setState({ images: response.data.results })
        // .then((response) => {
        //     console.log(response.data.results);
        // }).catch((error) => {
        //     console.log(error);
        // })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;