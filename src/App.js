import React, { Component } from 'react';
import Todos from './components/Todo';
import AddTodo from './components/addTodo';
import './App.css';
import Header from './components/layout/header';
import uuid from'uuid';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import about from './components/pages/about'
import axios from 'axios'
class App extends Component {
  state={
    todos:[]

  }
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
  .then(res=> this.setState({ todos:
    res.data}))

  }
  // toggle complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    })})

  }
  // delete todo
  delTodo=(id)=>{
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({todos:[...this.state.todos, res.data] }))
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
  }

  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=15',{
     title,
     completed:false 
    })
  
  .then(res=> this.setState({todos:[...this.state.todos, res.data] }));
 
}
  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
        <div className='container'>
          <Header/>
          <Route exact path='/' render={props=>(
          <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
            markComplete={this.markComplete} 
            delTodo={this.delTodo}/>
            </React.Fragment>
            )}/>
            <Route path='/about' component={about}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
