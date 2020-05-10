import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Task extends Component {
  handleDelete(e){
    e.stopPropagation();
    console.log(this)
    this.props.taskData.handleDeleteTask(this.props.data.id);
  }

  renderDeleteBtn(){
    if(this.props.taskData.displayDelete){
      const el = <FontAwesomeIcon icon="trash" color="red" onClick={this.handleDelete.bind(this)} />;
      return el;
    }
    return;
  }

  render() {
    return (
      <ListGroup.Item className={`task ${this.props.taskData.className}`} action onClick={() => this.props.taskData.handleTaskClick(this.props.data.id)} >
          <p>{this.props.data.desc}</p>
          <div>{this.renderDeleteBtn()}</div>
      </ListGroup.Item>
    )
  }
}

export default Task;
