import React, { Component } from 'react';
import List from './List';
import ListButtons from './ListButtons';
import shuffle from '../utils/shuffle';
import { ListControlProvider } from './ListControlContext';
import AddItem from './AddItem';

class ListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hidden: true,
            sorted: 'desc',
            list: [
                'Homer', 'Fred', 'George', 'Peter', 'Morty', 'Rick'
            ]
        }
    }

    toggleList = () => {
        this.setState(prevState => ({hidden: !prevState.hidden}))
    }

    sortList = () => {
        this.state.list.sort()

        if(this.state.sorted === 'asc'){
            this.state.list.reverse()
        }

        this.setState(prevState => ({sorted: prevState.sorted === 'desc' ? 'asc' : 'desc'}))
    }

    shuffleList = () => {
        this.setState(prevState => ({list: shuffle(prevState.list)}))
    }

    addItem = (item) => {
        this.setState(prevState => ({list: prevState.list.concat(item)}))
    }

    render() { 
        return (  
            <div>
                <ListControlProvider 
                    value={{
                        list:this.state.list,
                        hidden: this.state.hidden,
                        sorted: this.state.sorted,
                        toggleList: this.toggleList,
                        sortList: this.sortList,
                        shuffleList: this.shuffleList,
                        addItem: this.addItem,  
                    }}
                >
                    <ListButtons />
                    <AddItem />
                    <List />
                </ListControlProvider>
            </div>
        );
    }
}
 
export default ListBox;
