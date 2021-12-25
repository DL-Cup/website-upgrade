import "./css/loader.css";

function Loader() {
  return (
    <>
      <div className="loading">
        <div class="loader"></div>
        <p>Slow network. Please try again later.</p>
      </div>
    </>
  );
}

export default Loader;
