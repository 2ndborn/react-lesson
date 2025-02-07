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
        this.setState((prevState, prevProps) => {
            console.log("Previous State", prevState);
            console.log("Previous Properties", prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State", prevState);
            console.log("Previous Properties", prevProps);
            return {
                count: prevState.count + 1
            }
        }
        )
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