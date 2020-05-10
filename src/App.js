import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import AppHead from './components/AppHead';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleTaskListClick = this.handleTaskListClick.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  
    this.state = {
      appTitle: 'ToDo Test App',
      newTaskId: 0,
      listTitle: 'Tasks ToDo',
      listTitleDone: 'Tasks Done',
      tasks: [
        { id: 0, desc: 'Test 1', isDone: false},
        { id: 1, desc: 'Test 2', isDone: false},
        { id: 2, desc: 'Test 3', isDone: true},
        { id: 3, desc: 'Test 4', isDone: true}
      ],
    }
  }

  componentDidMount(){
    this.setState({ newTaskId: this.state.tasks.length });
  }

  handleAddTask(taskDesc){
    let newId = this.state.newTaskId;
    const newTask = {
      id: newId,
      desc: taskDesc,
      isDone: false
    }

    this.setState({ tasks: [...this.state.tasks].concat(newTask)})
    this.setState({ newTaskId: ++newId});
  }

  handleTaskListClick(taskId){
    const localTasks = Object.assign([], this.state.tasks);
    const taskToUpdate = localTasks.find(task => task.id === taskId);
    taskToUpdate.isDone = !taskToUpdate.isDone;

    this.setState({ tasks: localTasks});
  }

  handleDeleteTask(taskId){
    console.log('delete task')
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== taskId)});
  }
  
  render() {
    return (
      <div>
        <AppHead appTitle={this.state.appTitle} />
        <Container>
          <AddTask handleAddTask={this.handleAddTask}/>

          <section className="allLists">
            <TaskList
              listTitle={this.state.listTitle}
              tasks={this.state.tasks.filter(task => !task.isDone)}
              variant="danger"
              className="notDone"
              taskData={
                {
                  handleTaskClick: this.handleTaskListClick,
                  className: 'notDone'
                }
              }
            />

            <TaskList
              listTitle={this.state.listTitleDone}
              tasks={this.state.tasks.filter(task => task.isDone)}
              variant="success"
              className="done"
              taskData={
                {
                  displayDelete: true,
                  handleTaskClick: this.handleTaskListClick,
                  handleDeleteTask: this.handleDeleteTask,
                  className: 'done'
                }
              }
            />
          </section>
        </Container>
      </div>
    )
  }
}

export default App;
