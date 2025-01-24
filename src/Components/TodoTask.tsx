import {ITask} from "../Interfaces.ts";

interface Props {
    task: ITask;
}

function TodoTask ( {task}: Props ) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button>X</button>
        </div>
    )
}

export default TodoTask;