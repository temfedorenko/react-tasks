import { Loader } from "../Loader/Loader";

export const TodoModal = ({ todo, user, onModalClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onModalClose} />

      {!user ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title has-text-weight-medium">Todo #{todo.id}</div>

            <button type="button" className="delete" onClick={onModalClose} />
          </header>

          <div className="modal-card-body">
            <p className="block">{todo.title}</p>

            <p className="block">
              {todo.completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {" by "}

              <a href={`mailto:${user.email}`}>{user.name}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
