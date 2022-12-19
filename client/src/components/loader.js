import "./css/loader.css";

function Loader() {
  return (
    <>
      <div className="loading">
        <div className="loader"></div>
        <p>Server is probably asleep. Give it a few more seconds.</p>
      </div>
    </>
  );
}

export default Loader;
