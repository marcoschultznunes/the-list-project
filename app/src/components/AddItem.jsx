import React, { Component } from 'react';
import ListControlContext from './ListControlContext';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.inputRef = React.createRef()
    }

    static contextType = ListControlContext

    clickHandler = () => {
        this.context.addItem(this.inputRef.current.value)
    }

    inputEnter = (e) => {
        if(e.keyCode === 13){
            this.clickHandler()
            this.inputRef.current.value = ''
        }
    }

    render() { 
        return (  
            <div id="add_item_box">
                <h3>Add Item</h3>
                <input 
                    type="text" id="item_input" ref={this.inputRef} 
                    onKeyUp={this.inputEnter}
                />
                <button 
                    className='bg-green' onClick={this.clickHandler}
                >
                    Add
                </button>
            </div>
        );
    }
}
 
export default AddItem;