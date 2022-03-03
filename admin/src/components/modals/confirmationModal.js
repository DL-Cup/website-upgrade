export default function ConfirmationModal({ message = "", cancelFunc }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <p>{message}</p>
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
