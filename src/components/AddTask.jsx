import React, { Component, createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class AddTask extends Component {
  constructor(props) {
    super(props)

    this.handleTaskDescChange = this.handleTaskDescChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      desc: ''
    }
  }

  newTaskInput = createRef();

  componentDidMount(){
    this.newTaskInput.current.focus();
  }

  handleTaskDescChange(e){
    this.setState({ desc: e.target.value});
  }

  handleAddTask(e){
    e.preventDefault();
    if(this.state.desc){
      this.props.handleAddTask(this.state.desc);
      this.setState({ desc: ''});
    }
    this.newTaskInput.current.focus();
  }
  
  render() {
    return (
      <Form className="addTask" onSubmit={this.handleAddTask}>
        <Form.Group controlId="addTask">
          <Form.Label>Task description</Form.Label>
          <Form.Control className="col-12" ref={this.newTaskInput} type="text" placeholder="Enter task" value={this.state.desc} onChange={this.handleTaskDescChange} />
        </Form.Group>

        <Button className="btnAdd" variant="primary" type="submit">Add task</Button>
      </Form>
    )
  }
}

