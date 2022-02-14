function EmptyState({ message }) {
  return (
    <div className="error-msg">
      <img src="https://i.imgur.com/AnMJIeO.gif" alt="" />
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;
