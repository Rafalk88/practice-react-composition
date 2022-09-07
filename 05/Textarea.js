import React from 'react';

class Textarea extends React.Component {
    getSnapshotBeforeUpdate() {
        if (this.textarea.offsetHeight < 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.resize && this.textarea.offsetHeight < this.textarea.scrollHeight) {
            this.textarea.style.height = `${this.textarea.scrollHeight}px`
        } 
    }

    changeTextarea = () => {
        const {changeTextarea} = this.props
        changeTextarea(this.textarea.value)
    }

    render() {
        return <textarea onChange={this.changeTextarea} ref={element => this.textarea = element}></textarea>
    }
}

export default Textarea;