import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    changeTextarea = (value) => {
        this.setState({
            text: value,
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } changeTextarea={this.changeTextarea} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));