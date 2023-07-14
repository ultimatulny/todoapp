import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";
import "./app.css";

const tasks = [
  {
    id: 1,
    title: "Таска 1",
    completed: false,
    edit: false,
    createTime: Date.now() - 1252345,
  },
  {
    id: 2,
    title: "Таска 2",
    completed: true,
    edit: false,
    createTime: Date.now() - 336241,
  },
  {
    id: 3,
    title: "Таска 3",
    completed: false,
    edit: true,
    createTime: Date.now(),
  },
];

const App = () => {
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList tasks={tasks} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
