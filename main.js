'use strict';

//----------React with components

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, {toWhat: 'Orange'}, null),
    document.getElementById('my-app')
);

