import React, { Component } from 'react';
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstraop.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



class App extends React.Component {
  redner() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
