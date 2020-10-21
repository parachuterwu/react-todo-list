import React, { PureComponent } from 'react';

import ListItem from './ListItem';

class Todos extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
            <ul id="todo-list">
                {data.map(item => 
                    <ListItem
                        key={item.id}
                        data={item}
                    />
                )}           
            </ul>
        )
    }
}

export default Todos;