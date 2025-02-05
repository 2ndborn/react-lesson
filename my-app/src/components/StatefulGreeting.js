import React from "react";

class StatefulGreeting extends React.Component {
    render() {
        return <h2>Hello, {this.props.greeting}</h2>
    }
}

export default StatefulGreeting;