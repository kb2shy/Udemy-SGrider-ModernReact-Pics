import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        input: ''
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                          type="text" 
                          onChange={(e) => this.setState({input: e.target.value})}
                          value={this.state.input}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;