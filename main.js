'use strict';

//----------React with components

class App extends React.Component {

    render() {
       return <div className="main">
           <Header/>
           <Body/>
           <Footer/>
       </div>
    }
}



class Header extends React.Component {
    render() {
        return <div className="header">I am the header</div>
    }
}

class Body extends React.Component {
    render() {
        return <div className="body">
            <SidePanel/>
            <Content/>
        </div>
    }
}

class Footer extends React.Component {
    render() {
        return <div className="footer">I am the footer</div>
    }
}


class SidePanel extends React.Component {
    render() {
        return <div className="side-panel">I am the side panel</div>
    }
}

class Content extends React.Component {
    render() {
        return <div className="content">Here is the main contents area</div>
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('my-app')
);

