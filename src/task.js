import { FaTrashAlt } from 'react-icons/fa';

function TaskItem(props) {
  return (
    props.list.map((activity) => (
      <li key={activity.id}>
        <input type="checkbox" checked={activity.done} onChange={() => props.checkmark(activity.id)} />
        <input type="text" placeholder={activity.task} />
        <button type="button" className="deleteButton" onClick={() => props.delete(activity.id)}>
          <FaTrashAlt />
          {' '}
        </button>
      </li>
    ))
  );
}

export default TaskItem;
