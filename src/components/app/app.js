import React from "react";
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";
import "./app.css";

export default class App extends React.Component {
  globalId = 0;
  constructor() {
    super();

    this.createTask = (title) => {
      this.globalId++;
      return {
        id: this.globalId,
        title,
        createTime: Date.now(),
        completed: false,
        edit: false,
      };
    };

    this.state = {
      tasks: [
        this.createTask("Проснуться"),
        this.createTask("Улыбнуться"),
        this.createTask("Изучать React"),
      ],
      filter: "All",
    };

    this.removeTask = (id) => {
      this.setState(({ tasks }) => {
        const idx = tasks.findIndex((el) => el.id === id);
        const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
        return {
          tasks: newArr,
        };
      });
    };

    this.toggleElem = (id, key) => {
      this.setState(({ tasks }) => {
        const idx = tasks.findIndex((el) => el.id === id);
        const oldItem = tasks[idx];
        const newItem = { ...oldItem };
        newItem[key] = !newItem[key];
        const newArr = [
          ...tasks.slice(0, idx),
          newItem,
          ...tasks.slice(idx + 1),
        ];

        return {
          tasks: newArr,
        };
      });
    };

    this.toggleDone = (id) => {
      this.toggleElem(id, "completed");
    };

    this.toggleEdit = (id) => {
      this.toggleElem(id, "edit");
    };

    this.setNewTitle = (id, title) => {
      this.setState(({ tasks }) => {
        const idx = tasks.findIndex((el) => el.id === id);
        const oldItem = tasks[idx];
        const newItem = { ...oldItem };
        newItem.edit = !newItem.edit;
        newItem.title = title;
        const newArr = [
          ...tasks.slice(0, idx),
          newItem,
          ...tasks.slice(idx + 1),
        ];

        return {
          tasks: newArr,
        };
      });
    };

    this.addTask = (title) => {
      this.setState(({ tasks }) => {
        const newArr = [...tasks, this.createTask(title)];
        return {
          tasks: newArr,
        };
      });
    };

    this.changeFilter = (newFilter) => {
      this.setState({
        filter: newFilter,
      });
    };

    this.clearCompleted = () => {
      this.setState(({ tasks }) => {
        const newArr = tasks.filter((el) => !el.completed);
        return {
          tasks: newArr,
        };
      });
    };
  }

  render() {
    const itemsLeft = this.state.tasks.filter((el) => !el.completed).length;
    const filter = this.state.filter;
    let currentTasks = this.state.tasks;
    if (filter === "Active") {
      currentTasks = currentTasks.filter((el) => !el.completed);
    } else if (filter === "Completed") {
      currentTasks = currentTasks.filter((el) => el.completed);
    }

    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <section className="main">
          <TaskList
            tasks={currentTasks}
            removeTask={this.removeTask}
            toggleDone={this.toggleDone}
            toggleEdit={this.toggleEdit}
            setNewTitle={this.setNewTitle}
          />
          <Footer
            itemsLeft={itemsLeft}
            filter={filter}
            changeFilter={this.changeFilter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
