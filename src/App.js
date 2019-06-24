import React from 'react';
import todoItem from "./todoItem"

import './App.css';


const url = 'https://jsonplaceholder.typicode.com/';

let list = fetch(url + 'todos').then((responce) => {
  return responce.json();
})



function todoList() {
  return (
    <div className="App">
        <table>
          <thead>
          <th>status</th>
          <th>item</th>
          <th>user</th>
          <th>status</th>
          </thead>
          <tbody>
            <todoItem
                listItem={this.listItem}
            />
          </tbody>
        </table>
    </div>
  );
}

export default todoList;
