// Services
import axios from "./services/axios";

// Components
import Header from "./components/header";

function App() {
  const handleSubmission = (e) => {
    e.preventDefault();
    axios.post("/new-kitten", {
      name: e.target.name.value,
    });

    alert(`${e.target.name.value} added!`);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmission} method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
