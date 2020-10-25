import React, { PureComponent } from 'react';

import ListItem from './ListItem';

class Todos extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { data, editTxt, changeDone } = this.props;
        console.log(this.props)

        return (
            <ul id="todo-list">
                {data.map(item =>
                    <ListItem
                        key={item.id}
                        itemData={item}
                        editTxt={editTxt}
                        changeDone={changeDone}
                    />
                )}           
            </ul>
        )
    }
}

export default Todos;