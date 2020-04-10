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

        //2. Set Default state
        this.state = {
            title: "React App"
        }
    };

    //3. Before get create
   UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    };

    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    };

    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    // stop re-render
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if (nextState.title === this.state.title) {
            return false
        } else {
            return true
        }
    };

    //4. render
    render() {
        console.log("render");
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div className="btn btn-success" onClick={() => { this.setState({ title: "Something else" }) }}>
                    Click
                </div>
            </div>
        )
    };

    // After get created
    componentDidMount() {
        console.log("componentDidMount");
    };

    // When we loose the scope
    componentWillUnmount(){
        console.log("componentWillUnmount");
    };
};

export default LifeCycle; 