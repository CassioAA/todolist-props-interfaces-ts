import {ITask} from "../Interfaces.ts";

interface Props {
    task: ITask;
    removeTask(taskKeyToRemove: number): void;
    taskKey: number;
}

function TodoTask ( {taskKey, task, removeTask}: Props ) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button
                onClick={() => {
                    removeTask(taskKey);
                }}
            >X</button>
        </div>
    );
}

export default TodoTask;