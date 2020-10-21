import React, { PureComponent } from 'react';

class Create extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = { val: '' };
    }

    handleChange(event) {
        this.setState({
            val: event.target.value
        });
    }

    handleKeyDown(event) {
        let { val } = this.state;
        let { addData } = this.props;

        if (event.key === 'Enter') {
            if (!val.trim()) {
                alert('请输入内容');
                return;
            }

            addData(val);
            this.setState({
                val: ''
            });
        }
    }

    render() {
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