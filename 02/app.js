import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    setUsersList = (userName) => {
        this.setState(state => {
            return {
                usersList: [...state.usersList, userName]
            }
        })
    }

    render() {
        const  { usersList } = this.state

        return (
            <section>
                <Form setUsersList={this.setUsersList} />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));