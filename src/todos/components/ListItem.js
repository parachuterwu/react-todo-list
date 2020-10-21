import React,{ PureComponent, createRef } from 'react';

class ListItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.data.txt}
            </div>
        )
    }
}

export default ListItem;