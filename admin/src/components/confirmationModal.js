export default function ConfirmationModal({
  messageStart = "",
  messageEnd = "",
  highlight = "",
  cancelFunc,
}) {
  return (
    <div className="modal-container">
      <div className="modal">
        <p>
          {messageStart} <span className="__highlight">{highlight}</span>{" "}
          {messageEnd}
        </p>
        <div className="modal-actions">
          <button className="__confirm">Confirm</button>
          <button className="__cancel" onClick={() => cancelFunc()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
