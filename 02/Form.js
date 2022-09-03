import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        const { setUsersList } = this.props
        e.preventDefault()

        setUsersList(this.input.value)
        this.input.value = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    ref={node => this.input = node}
                    placeholder={'Wpisz Imię i Nazwisko...'}
                />
                <input type="submit" />
            </form>
        )
    }
}

export default Form