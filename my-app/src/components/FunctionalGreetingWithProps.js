import React from 'react';

// export default function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.greeting}. I am {props.name} and I am {props.age} years old</h1>
}
export default FunctionalGreetingWithProps;