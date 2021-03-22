import React, { Component } from 'react';

class List extends Component {
    
    render() { 
        const {hidden, list} = this.props

        const mappedList = list.map((item, index) => 
            <li key={index}>{item}</li>
        )

        return (  
            <ul className={hidden ? 'hidden' : ''}>
                {mappedList}
            </ul>
        );
    }
}
 
export default List;
