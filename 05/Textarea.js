import React from 'react';

class Textarea extends React.Component {
    getHeight() {
        return this.textarea.offsetHeight
    }

    getScroll() {
        return this.textarea.scrollHeight
    }

    getSnapshotBeforeUpdate() {
        if (this.getHeight() < 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.resize && this.getHeight() < this.getScroll()) {
            this.textarea.style.height = `${this.getScroll()}px`
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