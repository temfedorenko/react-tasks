import classNames from "classnames";

export const TodoList = ({ todos, onModalOpen }) => {
  const todosElements = todos.map((todo) => {
    return (
      <tr className="" key={todo.id}>
        <td className="is-vcentered">{todo.id}</td>
        <td className="is-vcentered">
          {todo.completed ? (
            <span className="icon" data-cy="iconCompleted">
              <i className="fas fa-check" />
            </span>
          ) : (
            <span className="icon" data-cy="iconCompleted">
              <i className="fa-solid fa-xmark"></i>
            </span>
          )}
        </td>
        <td className="is-vcentered is-expanded">
          <p
            className={classNames({
              "has-text-danger": !todo.completed,
              "has-text-success": todo.completed,
            })}>
            {todo.title}
          </p>
        </td>
        <td className="has-text-right is-vcentered">
          <button className="button" type="button" onClick={() => onModalOpen(todo)}>
            <span className="icon">
              <i className="far fa-eye" />
            </span>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{todosElements}</tbody>
    </table>
  );
};
