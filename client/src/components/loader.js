import "./css/loader.css";

function Loader() {
  return (
    <>
      <div className="loading">
        <div className="loader"></div>
        <p>Slow network. Please try again later.</p>
      </div>
    </>
  );
}

export default Loader;
