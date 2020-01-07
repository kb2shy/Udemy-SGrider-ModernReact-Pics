import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

    async onSearchSubmit(input) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: input },
            headers: {
                Authorization: 'Client-ID 198483e4848df8d609266ec3821b37b9fc62ee0588b48128298630a23caaee19'
            }
        });

        console.log(response.data.results);
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
            </div>
        )
    }
}

export default App;