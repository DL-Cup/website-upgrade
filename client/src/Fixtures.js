const axios = require("axios");

const getFixtures = async () => {
  const res = await axios.get("http://localhost:5000/fixtures");
  return res.data;
};

function DisplayFixtures() {
  let render = getFixtures().then((res) => <div>{res.data[0]}</div>);
  return render;
}

export default DisplayFixtures;
