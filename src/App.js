import React, { Component } from 'react'
import Todo from './Todo'
import Addtask from './Addtask';

export class App extends Component {
  state = {
    tasks: [
      {id: 1, body: 'Buy some milk'},
      {id: 2, body: 'Play PES'}
    ]
  }

  handleDelete = id => {
      // console.log(id);
      let filteredtasks = this.state.tasks.filter(task => {
        return task.id !== id
      });

      this.setState({ tasks: filteredtasks })
  }

  handleSubmit = task => {
    // console.log(task);
    let addtask = {
      id: Math.round(Math.random() * 100),
      body: task
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, addtask]
    }))
  }

  render() {
    return (
      <div>

        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center" style={{'fontSize': '41px'}}>TODO-APP</a>
          </div>
        </nav>

        <div className='collection container' style={{'marginTop': '10%'}}>
          <Todo tasks={this.state.tasks} handleDelete={this.handleDelete}/>
        </div>

        <Addtask handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
 