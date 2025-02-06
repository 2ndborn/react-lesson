import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello!!!",
            buttonText: "Exit"
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.introduction}, {this.props.greeting}</h2>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;