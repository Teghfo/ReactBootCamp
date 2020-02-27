import React from "react";
import ListShow from "./ListShow";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todoList: [],
      showList: "All"
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        { text: this.state.text, done: false },
        ...this.state.todoList
      ],
      text: ""
    });
  };

  onDone = index => {
    // let newTodoList = this.state.todoList.map((todo, indexTodo) => {
    //   if (indexTodo === index) {
    //     todo.done = !todo.done;
    //   }
    //   return todo;
    // });
    // let newTodoList = [...this.state.todoList];
    // let newTodoObj = { ...newTodoList[index] };
    // newTodoObj.done = !newTodoObj.done;
    // newTodoList[index] = newTodoObj;
    // console.log(this.state.todoList);
    // this.setState({
    //   todoList: newTodoList
    // });
    this.setState(state => ({
      todoList: state.todoList.map((todo, indexTodo) => {
        if (indexTodo === index) {
          todo.done = !todo.done;
          console.log(this.state.todoList);
        }
        return todo;
      })
    }));
  };

  render() {
    let newTodo = [];
    if (this.state.showList === "All") newTodo = this.state.todoList;
    else if (this.state.showList === "Done")
      newTodo = this.state.todoList.filter(todo => todo.done);
    else newTodo = this.state.todoList.filter(todo => !todo.done);
    return (
      <>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.text} onChange={this.handleChange} />
            <button type="submit">TodoAdd</button>
          </form>
          {newTodo.map((todo, index) => (
            <ListShow
              key={index}
              todo={todo}
              handleDone={() => this.onDone(index)}
            />
          ))}
        </div>
        <div className="App">
          <button onClick={() => this.setState({ showList: "All" })}>
            All
          </button>{" "}
          <button onClick={() => this.setState({ showList: "Done" })}>
            Done
          </button>{" "}
          <button onClick={() => this.setState({ showList: "unDone" })}>
            unDone
          </button>
        </div>
      </>
    );
  }
}

function Timer() {
  const [timer, setTimer] = React.useState(0);
  let intervalId = React.useRef(null);

  return <div> {timer} </div>;
}

export default TodoForm;
