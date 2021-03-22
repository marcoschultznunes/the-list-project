import React, { Component } from 'react';
import List from './List';
import ToggleListButton from './ListButtons';
import shuffle from '../utils/shuffle';

class ListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hidden: true,
            sorted: 'desc',
            list: [
                'Homer', 'Fred', 'Morty', 'Wayne','Cartman', 'Peter'
            ]
        }
    }

    toggleList = () => {
        this.setState(prevState => ({hidden: !prevState.hidden}))
    }

    sortList = () => {
        if(this.state.sorted === 'desc'){
            this.state.list.sort()
        } else {
            this.state.list.reverse()
        }

        this.setState(prevState => ({sorted: prevState.sorted === 'desc' ? 'asc' : 'desc'}))
    }

    shuffleList = () => {
        this.setState(prevState => ({list: shuffle(prevState.list)}))
    }

    render() { 
        return (  
            <div>
                <ToggleListButton 
                    toggleList={this.toggleList} sortList={this.sortList} 
                    shuffleList={this.shuffleList}
                    hidden={this.state.hidden} sorted={this.state.sorted}
                />
                <List 
                    list={this.state.list}
                    hidden={this.state.hidden} sorted={this.state.sorted}
                />
            </div>
        );
    }
}
 
export default ListBox;