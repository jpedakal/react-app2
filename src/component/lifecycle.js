//1. Get default state
//2. Set Default State
//3. Before get create
//4. render
//5. After get created

import React, { Component } from 'react';

class LifeCycle extends Component {
    // Get default state
    constructor(props) {
        super(props)

        // Set Default state
        this.state={
            title: "React App"
        }
    }
    
    // render
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export default LifeCycle; 