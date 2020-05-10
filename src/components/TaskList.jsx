import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Task from './Task';


export class TaskList extends Component {
  handleResize(){
    //taskList 
  }

  handleRenderList(){
    return this.props.tasks.map(task => <Task key={task.id} data={task} taskData={this.props.taskData} />);
  }
  
  render() {
    return (
      <div className={`taskList col-lg-6`}>
        <h1><Badge variant={this.props.variant}>{this.props.listTitle}</Badge></h1>
        <ListGroup>
          {this.handleRenderList()}
        </ListGroup>
      </div>
    )
  }
}

export default TaskList
