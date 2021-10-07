import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import bootstap from 'bootstrap';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


//showing vs code github setup
class App extends React.Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id: uuid(),
    item: '',
    editItem: false
  };
  handleChange = (e) => {console.log('handle change') }
  handleSubmit = (e) => {console.log('handle Submit') }
  clearList = (e) => { console.log('clear list') }
  handleDelete = (id) => { console.log('handle edit ${ id }') }
  handleEdit = (id) => {console.log(' handle edit ${id} ')}
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10.mx-auto.col-md-8.mt-4">
            <h3 className="text-capitalize text-center">todo TodoInput
            </h3>
          </div>
        </div>
        <div className="row">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
