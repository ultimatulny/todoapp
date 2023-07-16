import React from "react";
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";
import "./app.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          title: "Таска 1",
          createTime: Date.now() - 1252345,
        },
        {
          id: 2,
          title: "Таска 2",
          createTime: Date.now() - 336241,
        },
        {
          id: 3,
          title: "Таска 3",
          createTime: Date.now(),
        },
      ],
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
  }

  render() {
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
          <Footer />
        </section>
      </section>
    );
  }
}
