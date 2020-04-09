//1. Get default state
//2. Set Default State
//3. Before get create
//4. render
//5. After get created

import React, { Component } from 'react';

class LifeCycle extends Component {
    //1. Get default state
    constructor(props) {
        super(props)
        
        // Set Default state
        this.state={
            title: "React App"
        }
    }
    render() {
        return (
            <div>
                <h3>LifeCycle</h3>
            </div>
        )
    }
}

export default LifeCycle; 