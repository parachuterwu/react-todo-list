import React,{ PureComponent, createRef } from 'react';

class ListItem extends PureComponent {
    constructor(props) {
        super(props);

        this.setEditing = this.setEditing.bind(this);
        this.setValue = this.setValue.bind(this);
        this.editItem =  this.editItem.bind(this);

        this.state = {
            editing: false,
            val: ''
        }
    }

    setEditing() {
        this.setState({
            editing: true
        });
    }

    setValue(event) {
        this.setState({
            val: event.target.value
        })
    }

    editItem() {
        this.setState({
            editing: false
        });
        
        const { val } = this.state;
        const { editTxt } = this.props;
        const { id } = this.props.itemData;

        if (val) {
            editTxt(id, val);
        }
    }

    render() {
        console.log(this.props)
        const { itemData } = this.props;
        const { txt, done } = itemData;
        const { editing, val } = this.state;

        return (
            <li className={editing ? "editing" : ""}>
                <div className={"todo " + (done? "done" : "")}>
                    <div className="display">
                        <input
                            className="check"
                            type="checkbox"
                        />
                        <div 
                            className="todo-content"
                            onDoubleClick={this.setEditing}
                        >
                            {txt}
                        </div>
                        <span
                            className="todo-destroy"
                            // onClick={this.removeItem(id)}
                        >

                        </span>
                    </div>

                    <div className="edit">
                        <input
                            className="todo-input"
                            type="text"
                            value={val}
                            onChange={this.setValue}
                            onBlur={this.editItem}
                        />
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem;