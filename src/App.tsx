import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces.ts";
import TodoTask from "./Components/TodoTask.tsx";

const App: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        switch (event.target.name) {
            case "task":
                setTask(event.target.value);
                break;
            case "deadline":
                setDeadline(Number(event.target.value));
                break;
        }
    }

    function addTask(): void {
        const newTask = {
            taskName: task,
            deadline: deadline
        };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
    }

    function removeTask(taskKeyToRemove: number): void {
        setTodoList(
            todoList.filter((_, key) =>
                key !== taskKeyToRemove
            )
        );
    }

    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="Task..."
                        name="task"
                        value={task}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Deadline (in Days)..."
                        name="deadline"
                        value={deadline}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} taskKey={key} task={task} removeTask={removeTask}/>;
                })}
            </div>
        </div>
    );
};

export default App;