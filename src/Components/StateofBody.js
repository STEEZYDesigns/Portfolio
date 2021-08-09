import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateofBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            BodyValue: 1 // 1 is the default. HomeBody.js 
        }
        // BodyValue can range from 1-4 or depending on how many pages I need. to any number
        // The assumption here is I will create components that are called to render by clicking links, 
        // which change the state, which will trigger a listening router to call React to remove the old
        // and replace with the new value of state / associated render 
    }

    evaluateBodyValue() {
        let BV = this.state.BodyValue;
        // DO WE EVALUTE THE BODYVALUE HERE? AND SO WE CHANGE THE DOM HERE?
        //OR DO WE USE EXPRESS.JS
        //switch case BV, change the DOM if so
        
    }
}