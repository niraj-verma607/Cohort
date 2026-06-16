import axios from "axios";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15"
    );

    console.log(response.data);
    setImages(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button> <br />
      {images.map((elem, idx) => {
        return (
          <div key={idx}>
            <img src={elem.download_url} alt="" height="100px" />
            <p>Author : {elem.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
