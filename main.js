'use strict';

//----------React with components

class App extends React.Component {
    render() {
        const header = React.createElement(Header, null, null);
        const body = React.createElement(Body, null, null);
        const footer = React.createElement(Footer, null, null);

        return React.createElement('div', {className: "main"}, header, body, footer);
    }
}



class Header extends React.Component {
    render() {
        return React.createElement('div', {className: "header"}, `I am the header`);
    }
}

class Body extends React.Component {
    render() {
        return React.createElement('div', {className: "body"},
            React.createElement(SidePanel, null, null),
            React.createElement(Content, null, null)
        );
    }
}

class Footer extends React.Component {
    render() {
        return React.createElement('div', {className: "footer"}, `I am the footer`);
    }
}


class SidePanel extends React.Component {
    render() {
        return React.createElement('div', {className: "side-panel"}, `I am the side panel`);
    }
}

class Content extends React.Component {
    render() {
        return React.createElement('div', {className: "content"}, `Here is the main contents area`);
    }
}


ReactDOM.render(
    React.createElement(App, null, null),
    document.getElementById('my-app')
);

