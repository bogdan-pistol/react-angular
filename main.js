'use strict';

//run npm install axios

import axios from 'axios';

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
        return <TodoList />
    }
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class TodoList extends React.Component {

    constructor() {
        super()
        this.state = {todos: []};
    }

    componentWillMount() {
        this.getToDos().then(
            todos => this.setState({todos})
        );
    }

    getToDos() {
        const url = `${BASE_URL}/todos`;
        return axios.get(url).then(response => response.data);
    }

    render() {
        let {todos}= this.state;
        return (
            <div>
                {todos &&

                    todos.slice(0, 15).map((todo, index) => (
                        <Todo key={index} id={todo.id} completed={todo.completed} title={todo.title} userId={todo.userId}/>
                    ))

                }

            </div>
        )
    }
}

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            completed: props.completed,
            title: props.title,
            userId: props.userId
        }
    }

    render() {
        let {id, completed, title, userId}= this.state;

        return (
            <div>
                <div>
                    <span>id: {id}&nbsp;</span>
                    <span>completed: {completed.toString()}&nbsp;</span>
                </div>
                <div>
                    <span>Tile: {title}&nbsp;</span>
                    <span>UserId: {userId}&nbsp;</span>
                </div>
                <hr />
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('my-app')
);

