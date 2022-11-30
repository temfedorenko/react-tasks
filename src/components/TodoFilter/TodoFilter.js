export const TodoFilter = ({ filter, searchQuery, onSelectChange, onSearchChange }) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select value={filter} onChange={(event) => onSelectChange(event.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={(event) => onSearchChange(event.target.value)}
        value={searchQuery}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: "all" }}>
        {searchQuery ? (
          <button type="button" className="delete" onClick={() => onSearchChange("")} />
        ) : null}
      </span>
    </p>
  </form>
);
