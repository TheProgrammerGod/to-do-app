import React from 'react'
import './App.css'

function Nav() {
    return (
        <div className='nav'>
            <h2>TO-DO</h2>

            <div className="to-do-add">
                <input type="text" id="input" placeholder="To-do item" />
                <button onclick="addItem()" >Add</button>
            </div>
        </div>
    )
}

export default Nav