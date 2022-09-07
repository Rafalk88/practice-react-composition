import React from 'react'
import {v4 as uuid} from 'uuid'

class File extends React.Component {

    handleFiles = () => {
        const { addFile } = this.props
        const files = [...this.input.files]

        files.forEach(file => {
            if (file.type.includes('text')) {
                const reader = new FileReader()
                reader.addEventListener(
                    'load',
                    () => {
                        const data = {
                            id: uuid(),
                            name: file.name,
                            size: (file.size / (1024*1024)).toFixed(2),
                            data: reader.result,
                        }
                        addFile(data)
                    },
                    false
                )

                reader.readAsText(file)
            } else {
                throw new Error('Plik nie jest typu tekstowego!')
            }
        });
    }

    render() {
        return <input type="file" multiple onChange={this.handleFiles} ref={element => this.input = element} />
    }
}

export default File;