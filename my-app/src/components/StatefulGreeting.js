import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello!!!",
            buttonText: "Exit",
            count: 0,
        }
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        })
        console.log(this.state.introduction)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        }, ()=> {
            console.log("New state", this.state.count)
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.introduction}, {this.props.greeting}</h2>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>increment</button>
                <p>You have click {this.state.count} times!</p>
            </div>
        )
    }
}

export default StatefulGreeting;