import React, { Component } from 'react';

class ToggleListButton extends Component {
    
    render() { 
        const {hidden, sorted, toggleList, sortList, shuffleList} = this.props

        return (
            <div>
                <button 
                    className={hidden ? 'bg-red' : 'bg-green'} 
                    onClick={toggleList}
                >  
                    Toggle List
                </button>

                <button
                    className={sorted === 'desc' ? 'bg-orange' : 'bg-blue'}
                    onClick={sortList}
                >
                    Sort {sorted === 'desc' ? 'DESC.' : 'ASC.'}
                </button>
                
                <button
                    className={'bg-purple'}
                    onClick={shuffleList}
                >
                    Shuffle
                </button>
            </div>
            
        );
    }
}
 
export default ToggleListButton;