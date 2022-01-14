import { FaTrashAlt } from 'react-icons/fa';
import './task.css';

function TaskItem(props) {
  return (
    props.list.map((activity) => (
      <li key={activity.id}>
        <input type="checkbox" checked={activity.done} onChange={() => props.checkmark(activity.id)} />
        <input
          type="text"
          defaultValue={activity.task}
          className={activity.done ? 'marked' : 'normal'}
          onBlur={(e) => props.updateTask(e, activity.id)}
        />
        <button type="button" className="deleteButton" onClick={() => props.delete(activity.id)}>
          <FaTrashAlt />
          {' '}
        </button>
      </li>
    ))
  );
}

export default TaskItem;
