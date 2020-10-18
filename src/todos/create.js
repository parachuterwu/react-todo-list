import React, { PureComponent } from 'react';

class Create extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {val: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({
            val: event.target.value
        });
    }

    handleKeyDown(event) {
        let {val} = this.state;

        if (event.key === 'Enter') {
            console.log('23333')
        }
    }

    render() {
        let {addData} = this.props;

        return (
            <div id="create-todo">
                <input
                    id="new-todo" 
                    placeholder="What needs to be done?" 
                    autoComplete="off"
                    type="text"
                    value={this.state.val}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

export default Create;