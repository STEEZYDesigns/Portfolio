import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalHeader from './Components/GlobalHeader';
import StateofBody from './Components/StateofBody';
import HomeBody from './Components/HomeBody';
import GlobalFooter from './Components/GlobalFooter';

// React-Bootstrap CDN
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous" /> 


class HomePage extends Component {

    render() {
        return(
            <React.Fragment>
                {/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script> */}
                <GlobalHeader />
                {/* <StateofBody></StateofBody> */}
                <HomeBody></HomeBody>
                <GlobalFooter />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<HomePage />, document.getElementById('root') );