function TaskItem(list) {
  return (
    list.list.map((activity) => (
      <li key={activity.id}>
        <input type="checkbox" defaultChecked={activity.done} />
        <input type="text" placeholder={activity.task} />
        <button type="button" className="deleteButton">&#128465;</button>
      </li>
    ))
  );
}

export default TaskItem;
