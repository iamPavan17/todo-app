import React, { Component } from 'react'

export class Addtask extends Component {
    state = {
        task: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state.task)
        // console.log(this.state.task);
        // console.log(e.target.task);
        e.target.task.value = ''
    }

    render() {
        return (
            <div className='container' style={{'marginTop': '3%'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="task" type="text" name='task' onChange={this.handleChange}/>
                        <label htmlFor="task">Add task</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Addtask
