import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      console.log(res);
      setNotes(res.data.note);
    });
  }, []);

  return (
    <div className="notes">
      {notes.map((noteItem, index) => {
        return (
          <div className="note" key={noteItem._id}>
            <h1>{noteItem.title}</h1>
            <p>{noteItem.description}</p>

            <div className="note-actions">
              <button className="edit-btn">✏️ Edit</button>
              <button className="delete-btn">🗑️ Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
