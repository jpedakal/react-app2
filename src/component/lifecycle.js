//1. Get default state
//2. Set Default State
//3. Before get create
//4. render
//5. After get created

import React, { Component } from 'react';

class LifeCycle extends Component {

    // After get created
    componentDidMount() {
        console.log("After created");
    }
    
    //1. Get default state
    constructor(props) {
        super(props)

        //2. Set Default state
        this.state = {
            title: "React App"
        }
    }
    //3. Before get create
    componentWillMount() {
        console.log("Before created");
    }

    //4. render
    render() {
        console.log("render");
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    
}

export default LifeCycle; 