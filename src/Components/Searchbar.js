import React from 'react';

export class Searchbar extends Component {

    render() {
        return(
            <div id="SearchbarComp">
                <div id="SearchIcon"></div> 
                <input type="text" placeholder="Search"></input> 
                {/* Goes on the middle-right of the GlobalHeader. My search bar will eventually
                be geared towards shopping on my shopping page. I may simply assign it a Programmable
                Search Engine through Google at first */}
            </div>
        )
    }
}
export default SearchBar;